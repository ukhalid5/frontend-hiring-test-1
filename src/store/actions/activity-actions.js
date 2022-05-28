import { types } from '../reducers/activity-reducers';
import axios from 'axios';

const APIBasePath = 'https://frontend-test-api.aircall.io';

const resp={
  "nodes": [
      {
          "id": "8b7d1e26-3e80-4618-b701-05b67b8311f5",
          "duration": 62232,
          "is_archived": true,
          "from": "+33146813452",
          "to": "+33128671984",
          "direction": "outbound",
          "call_type": "missed",
          "via": "+33178775179",
          "created_at": "2022-05-08T16:41:18.210Z",
          "notes": [
              {
                  "id": "85349ecb-3b8d-45ec-aea4-db8576f1b594",
                  "content": "Harum nesciunt at molestiae sunt nihil quo expedita quibusdam nobis."
              }
          ]
      },
      {
          "id": "a11e6abe-55a1-4bd8-865b-4e0b6c445481",
          "duration": 86446,
          "is_archived": false,
          "from": "+33189325956",
          "to": "+33179714475",
          "direction": "outbound",
          "call_type": "voicemail",
          "via": "+33175509037",
          "created_at": "2022-05-15T04:22:21.873Z",
          "notes": []
      },
      {
          "id": "84f2ef78-52f4-4cf2-8c6b-6ec15efa9ce7",
          "duration": 28903,
          "is_archived": false,
          "from": "+33178936190",
          "to": "+33142020288",
          "direction": "outbound",
          "call_type": "missed",
          "via": "+33148919220",
          "created_at": "2022-05-09T04:47:46.094Z",
          "notes": []
      },
      {
          "id": "7bc14fc3-006a-48ff-8e66-0dfd247b984f",
          "duration": 29601,
          "is_archived": false,
          "from": "+33160145461",
          "to": "+33186839992",
          "direction": "inbound",
          "call_type": "missed",
          "via": "+33190349637",
          "created_at": "2022-05-09T20:51:34.825Z",
          "notes": []
      },
      {
          "id": "62b2afad-dbf1-4918-9a70-137f4a2dcee4",
          "duration": 38871,
          "is_archived": true,
          "from": "+33121614609",
          "to": "+33181533728",
          "direction": "inbound",
          "call_type": "voicemail",
          "via": "+33166645374",
          "created_at": "2022-05-13T14:57:56.531Z",
          "notes": [
              {
                  "id": "f3f9e969-b646-4f20-87d9-c5e92b704d51",
                  "content": "Voluptatem quaerat quia."
              }
          ]
      },
      {
          "id": "cbc50002-4587-429a-997b-01bc663130b7",
          "duration": 77600,
          "is_archived": false,
          "from": "+33100984448",
          "to": "+33174771725",
          "direction": "inbound",
          "call_type": "missed",
          "via": "+33193505613",
          "created_at": "2022-05-11T16:01:32.770Z",
          "notes": []
      },
      {
          "id": "01c705d9-0c2c-4baa-aff2-0f03e862bc88",
          "duration": 10342,
          "is_archived": true,
          "from": "+33104023656",
          "to": "+33106348694",
          "direction": "outbound",
          "call_type": "answered",
          "via": "+33145680607",
          "created_at": "2022-05-11T19:32:04.411Z",
          "notes": [
              {
                  "id": "afd9c80d-b70b-4f19-9281-86c8d89b6894",
                  "content": "Sed quidem voluptas."
              }
          ]
      },
      {
          "id": "71350835-3b24-48be-be35-21512517e5df",
          "duration": 16152,
          "is_archived": true,
          "from": "+33184302799",
          "to": "+33169705702",
          "direction": "outbound",
          "call_type": "voicemail",
          "via": "+33181735669",
          "created_at": "2022-05-14T04:20:06.503Z",
          "notes": []
      },
     
  ],
  "totalCount": 101,
  "hasNextPage": true
}
export const useActions = (state, dispatch) => {
 
  // Fetching all feed activities
  const getActivities = async () => {
    dispatch({ type: types.LOADING_START });
    const loginresponse = await axios.post(
      `${APIBasePath}/auth/login`,
      { username: 'String!', password: 'String!' }        
    );
   
    let Token = loginresponse.data.access_token;
    try {
     console.log("first1",Token,resp)
      // const response = await axios.get(
      //   `https://frontend-test-api.aircall.io/calls/:String!`,
      //   { 
      //     headers: {
      //     "Authorization": `Bearer ${Token}`
      //               }
      //    });
      dispatch({ type: types.GET_ACTIVITIES_SUCCESS, payload: resp.nodes });
    } catch (err) {
     dispatch({ type: types.GET_ACTIVITIES_ERROR });
    }
  };

  // Fetching activity details
  const getActivityDetails = async (id) => {
    dispatch({ type: types.LOADING_START });
    const loginresponse = await axios.post(
      `${APIBasePath}/auth/login`,
      { username: 'String!', password: 'String!' }        
    );
    let Token = loginresponse.data.access_token;
    try {
      const response = await axios.get(
        `${APIBasePath}/calls/${id}`,
        { headers: {Authorization : `Bearer ${Token}`} }
      );
     
      dispatch({ type: types.GET_DETAILS_SUCCESS, payload: response });
    } catch (err) {
      dispatch({ type: types.GET_DETAILS_ERROR });
    }
  };

  return {
    getActivities,
    getActivityDetails,
  };
};
