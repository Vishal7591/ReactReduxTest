import { AsyncStorage } from "react-native";
import * as types from "./../constants/actionTypes";
import * as config from "./../constants/config";

export default{
    async fetchUserData() {
        try {
          const response = await fetch(`${config.PUBLIC_URL}5b9751e5300000332a0bd52d `, {
            method: "GET",
          });
          const responseJson = await response.json();
          return responseJson;
        } catch (error) {
          console.error(error);
        }
      }
}