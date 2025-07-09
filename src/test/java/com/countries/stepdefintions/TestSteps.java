package com.countries.stepdefintions;

import com.countries.POJOClasses.mockPOJO.Capital;
import com.countries.POJOClasses.mockPOJO.Name;
import com.countries.POJOClasses.mockPOJO.Root;
//import com.countries.POJOClasses.countryPOJO.Root;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

import com.countries.RequestSetup;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.tomakehurst.wiremock.WireMockServer;

import io.restassured.response.Response;
import org.junit.Assert;
import org.junit.Test;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static com.github.tomakehurst.wiremock.client.WireMock.*;
import static io.restassured.RestAssured.given;

public class TestSteps {

    RequestSetup requestSetup = new RequestSetup();

    @Test
    public void validateCountryByNameContains() {
        String input = "india";
        Response response = requestSetup.getCountryByName("india");
        String resp = response.asString();
        System.out.println(resp);


        List<String> names = response.jsonPath().getList("name.common");
        for (String name : names) {
            System.out.println("Name " + name);
            Assert.assertTrue("not retried correctly", name.toLowerCase().contains(input));
        }
    }

    @Test
    public void validateCountryByNameExactMatch() {
        String input = "india";
        Response response = requestSetup.getCountryByFullName("india");
        String resp = response.asString();
        System.out.println(resp);

        List<String> names = response.jsonPath().getList("name.common");
        for (String name : names) {
            System.out.println("Name " + name);
            Assert.assertTrue("not retried correctly", name.toLowerCase().contains(input));
        }
    }


    @Test
    public void validateCountryByCode() {
        String input = "col";
        Response response = requestSetup.getCountryBySingleCode(input);
        String resp = response.asString();
        System.out.println(resp);

        List<String> names = response.jsonPath().getList("name.common");
    }

    /**
     * This method validates the country by region.
     * It retrieves the country information based on the specified region and checks the currency symbol.
     *
     * @throws JsonProcessingException
     */
    @Test
    public void validateCountryByRegion() throws JsonProcessingException {
        Response response = requestSetup.getCountryBySingleCode("Europe");
        response.then().log().body();
        String resp = response.asString();
//        System.out.println(resp);

        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(response.asString());

        String common = jsonNode.get(0).get("name").get("common").asText();
        System.out.println("Common name: " + common);

//        System.out.println(jsonNode.get(0).get("translations").get("bre").get("official").asText());
//
//        Map<Object, Object> names = response.jsonPath().getMap("currencies");
//        System.out.println(names);
//        JsonNode currencies = objectMapper.valueToTree(names);
//        System.out.println(currencies);

//to get all the currencies and check  if the symbol is "€" and print the symbol
//        for (int i = 0; i < currencies.size(); i++) {
//            JsonNode currencyNode = currencies.get(i); // Get the current element in the array
//            if (currencyNode.has("BYN") && currencyNode.get("BYN").has("symbol")) {
//                /**
//                 * Yes, this step is mandatory to ensure that the currencyNode contains the key "EUR" and that the "EUR" object contains the key "symbol".
//                 * Without these checks, attempting to access currencyNode.get("EUR").get("symbol") could result in a NullPointerException if either "EUR" or "symbol" is missing in the JSON structure.
//                 */
//                if (currencyNode.get("BYN").get("symbol").asText().equals("Br")) {
//                    System.out.println("Currency Symbol: " + currencyNode.get("BYN").get("name").asText());
//                }
//
//            }
//        }
//
//        System.out.println(jsonNode.get(0).get("maps").get("googleMaps").asText());
//        // Check if the response status code is 200
//        Assert.assertEquals(200,response.getStatusCode());
    }


//    @Test
//    public void validateCountryByCodes(){
//        String input = "col,170,est";
////        List<String> input = new ArrayList<>();
////        input.add("col");
////        input.add("170");
//        Response response = requestSetup.getCountryByMultipleCode(input);
//        String resp = response.asString();
//        System.out.println(resp);
//
//        List<String> names = response.jsonPath().getList("name.common");
//        List<String> inputCode = Arrays.asList(input.split(","));
//        for(String code : inputCode) {
//
//            System.out.println("Name " + name);
//            Assert.assertTrue("not retried correctly", name.toLowerCase().contains(input));
//        }
//    }


    /******************************* practice for json response handling *****************************************************/

    @Test
    public void getCountriesByFullName() throws IOException {
        Response response = requestSetup.getCountryByFullName("india");
//        response.then().log().all();

        //using jsonpath()
        String name = response.jsonPath().get("[0].name.common");
        System.out.println("Country name using jsonpath :" + name);

        //using object mapper

        ObjectMapper o = new ObjectMapper();

        JsonNode namesTree = o.readTree(response.asString());

        String country = namesTree.get(0).get("name").get("common").asText();
        System.out.println("Country name using ObjectMapper :" + country);

        System.out.println("cca2 value :" + namesTree.get(0).get("cca2"));

        String currencySymbol = namesTree.get(0).get("currencies").get("INR").get("name").asText();
        System.out.println("Currency symbol :" + currencySymbol);
    }

    @Test
    public void getByName() throws JsonProcessingException {
        Response response = requestSetup.getCountryByName("India");
        response.then().log().body();

        String in = response.jsonPath().get("[0].tld[0]");
        System.out.println("Value: " + in);

        ObjectMapper o = new ObjectMapper();

        JsonNode jsonNode = o.readTree(response.asString());

        String value = jsonNode.get(0).get("tld").get(0).asText();
        System.out.println("Using object mapper :" + value);

        String translations = jsonNode.get(0).get("translations").get("ara").get("official").textValue();
        System.out.println("Country translations :" + translations);

        String mapsType = jsonNode.get(0).get("maps").get("googleMaps").textValue();
        System.out.println("maps type :" + mapsType);

        String capitalInfo = jsonNode.get(1).get("capitalInfo").get("latlng").get(0).asText();
        System.out.println("Capital information: " + capitalInfo);

        //assertions

        //for status code
        assertThat(response.getStatusCode(),equalTo(200));

        //for status line
        assertThat(response.getStatusLine(),containsString("OK"));

    }

//    @Test
//    public void getByNameUsingPOJO() throws JsonProcessingException {
//        Response response = requestSetup.getCountryByName("India");
//        ObjectMapper root = new ObjectMapper();
//        List<Root> root1 = root.readValue(response.getBody().asString(), root.getTypeFactory().constructCollectionType(List.class, Root.class));
//
//        System.out.println(root1.get(0).getName().getNativeName().getEng().getCommon());
//        List<String> value = root1.get(0).getTld();
//        System.out.println(value.get(0));
//    }


    @Test
    public void mockingCountryNameEndpoint() throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();

        Root root1 = new Root();

        Name name = new Name();
        name.setCommon("siva");
        name.setOfficial("no");


        Capital capital = new Capital();
        capital.setCurrency("INR");
        capital.setCou("bombay");
        List<Capital> capitalList = new ArrayList<>();
        capitalList.add(capital);

        root1.setName(name);
        root1.setCapital(capitalList);
        root1.setCca2("cca2");
        root1.setRegion("sofa");

        List<String> borders =new ArrayList<>(Arrays.asList("BGD", "BTN", "MMR", "CHN", "NPL", "PAK"));
        root1.setBorders(borders);

        String s = objectMapper.writeValueAsString(root1);
        WireMockServer wireMockServer = new WireMockServer(8080);
        wireMockServer.start();
        stubFor(get(urlEqualTo("/v3.1/alpha/co"))
                .willReturn(aResponse()
                        .withStatus(201)
                        .withHeader("Content-Type", "application/json")
                        .withBody(s)));


        Response response = given()
                .log().all()
                .baseUri("http://localhost:8080")
                .when()
                .get("/v3.1/alpha/co");


        response.then().log().all();
        Root root = objectMapper.readValue(response.getBody().asString(), Root.class);

        System.out.println(root.getName().getCommon());
        System.out.println(root.getCapital().get(0).getCou());
        System.out.println(root.getBorders().get(3));
        if (wireMockServer != null) {
            wireMockServer.stop();
        }
    }


}
