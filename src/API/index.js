import axios from 'axios';

export default axios.create({
	baseURL: 'https://cioclub-core-test.herokuapp.com',
	timeout: 1000,
	headers: {
		Authorization:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjEsImxhc3RFZGl0UHdkIjoiMjAyMi0wNS0xN1QxMjo0MDozOC4wMDBaIiwidGltZVN0YW1wQ3JlYXRlVG9rZW4iOiIyMDIyLTA2LTEwIDA1OjQ1OjMyIiwicm9sZSI6MCwiaWF0IjoxNjU0ODM5OTMyLCJleHAiOjI2MDg1NDgzOTkzMn0.JIw5ADrnla90LIJMTgjh62ELEDIxYn-yaEku5Vo8HV8',
	},
});
