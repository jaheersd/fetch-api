import React from "react";
import { useEffect } from "react";

const FetchApi = () => {
  const API_ENDPOINT = "https://jsonplaceholder.typicode.com/users";
  const fetchUsers = async (uri) => {
    try {
      const response = await fetch(uri);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchUsers(API_ENDPOINT);
  }, []);
  return <div>fetch api practice </div>;
};

export default FetchApi;
