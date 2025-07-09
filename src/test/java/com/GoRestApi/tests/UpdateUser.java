package com.GoRestApi.tests;

import com.GoRestApi.ServiceRequest;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.restassured.response.Response;
import org.testng.annotations.Test;

public class UpdateUser {

    @Test
    public void updateUserTest() throws JsonProcessingException {

        Response users = ServiceRequest.updateUserWithGivenUserDetails("users",PostUser.userId);
        users.then().log().all();


//        ObjectMapper oj=new ObjectMapper();
//        JsonNode jsonNode = oj.readTree(users.getBody().asString());
//        System.out.println(jsonNode.get("name"));
    }
}
