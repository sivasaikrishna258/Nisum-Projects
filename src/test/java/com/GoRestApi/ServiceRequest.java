package com.GoRestApi;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.restassured.response.Response;

import java.awt.*;

public class ServiceRequest {


    static String host="https://gorest.co.in/public/v2/";

    public static Response createUserWithGivenUserDetails(String user) throws JsonProcessingException {

        POJO pojo=new POJO();
        pojo.setEmail("k11113322@gmial");
        pojo.setName("siva");
        pojo.setStatus("active");
        pojo.setGender("male");
        ObjectMapper oj=new ObjectMapper();
        String s = oj.writeValueAsString(pojo);
        String queryParam="1a5247433665eaa1deec372200fd93d16c3e800bf4c178636509bd6f21b94ab2";
        String pathParam=user;

       return ServiceRequestMethods.createUserWithGivenDetails(host,pathParam,queryParam,s);

    }

    public static Response updateUserWithGivenUserDetails(String user, String userId) throws JsonProcessingException {

        POJO pojo=new POJO();
        pojo.setEmail("k111122@gmial");
        pojo.setName("sivasai");
        pojo.setStatus("inactive");
        pojo.setGender("male");
        ObjectMapper oj=new ObjectMapper();
        String s = oj.writeValueAsString(pojo);
        String queryParam="1a5247433665eaa1deec372200fd93d16c3e800bf4c178636509bd6f21b94ab2";
        String pathParam=user;
        String id=userId;

        return ServiceRequestMethods.updateUserWithGivenDetails(host,pathParam,queryParam,s,id);



    }
}
