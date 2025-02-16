const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../app');
const mockMostWantedProfile = require('../utils/mockMostWantedProfile.json');
const WantedProfile = require('../repositories/models/WantedProfile');

jest.mock('../repositories/models/WantedProfile', () => {
  return {
    findById: jest.fn().mockResolvedValueOnce({
      _id: 'some_id'
    })
  };
});

describe('GET /api/wantend/:id', () => {
  it('should get a single most wanted profile', async () => {
    const res = await request(app)
      .get(`/api/wantend/some_id`)
      .expect(200)
      .expect('Content-Type', /json/);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('_id');
    expect(WantedProfile.findById).toHaveBeenCalledOnce();
  });
});