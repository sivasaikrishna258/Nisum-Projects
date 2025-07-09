package com.GoRestApi.tests;

import com.GoRestApi.ServiceRequest;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.restassured.response.Response;
import org.testng.annotations.Test;

public class PostUser {

    static  String userId;
    @Test
    public void createUserTest() throws JsonProcessingException {

        Response users = ServiceRequest.createUserWithGivenUserDetails("users");
//        users.then().log().all();


        ObjectMapper oj=new ObjectMapper();
        JsonNode jsonNode = oj.readTree(users.getBody().asString());
        System.out.println(jsonNode.get("name"));
        userId=jsonNode.get("id").asText();
        System.out.println(userId);
    }
}
