package com.countries.stepdefintions;

import com.countries.RequestSetup;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.Assert;
import org.junit.Test;

import java.util.Iterator;
import java.util.List;

import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.junit.Assert.assertTrue;

/**
 * | **Matcher**               | **Description**                        | **Example Usage**                                          |
 * | ------------------------- | -------------------------------------- | ---------------------------------------------------------- |
 * | `equalTo(value)`          | Exact value match                      | `body("id", equalTo(1))`                                   |
 * | `not(value)`              | Value should not match                 | `body("status", not(equalTo(500)))`                        |
 * | `hasItem(value)`          | List contains a value                  | `body("ids", hasItem(100))`                                |
 * | `hasItems(v1, v2, ...)`   | List contains multiple values          | `body("ids", hasItems(10, 20, 30))`                        |
 * | `contains(...)`           | Exact list with exact order            | `body("names", contains("John", "Jane", "Doe"))`           |
 * | `containsInAnyOrder(...)` | Exact values, any order                | `body("names", containsInAnyOrder("Jane", "John", "Doe"))` |
 * | `containsString(str)`     | String contains substring              | `body("message", containsString("success"))`               |
 * | `startsWith(str)`         | String starts with                     | `body("email", startsWith("admin"))`                       |
 * | `endsWith(str)`           | String ends with                       | `body("file", endsWith(".json"))`                          |
 * | `greaterThan(n)`          | Numeric comparison: greater than       | `body("age", greaterThan(18))`                             |
 * | `lessThan(n)`             | Numeric comparison: less than          | `body("price", lessThan(1000))`                            |
 * | `greaterThanOrEqualTo(n)` | Greater than or equal                  | `body("score", greaterThanOrEqualTo(50))`                  |
 * | `lessThanOrEqualTo(n)`    | Less than or equal                     | `body("score", lessThanOrEqualTo(100))`                    |
 * | `nullValue()`             | Value must be null                     | `body("error", nullValue())`                               |
 * | `notNullValue()`          | Value must not be null                 | `body("userId", notNullValue())`                           |
 * | `instanceOf(Type.class)`  | Type check                             | `body("amount", instanceOf(Integer.class))`                |
 * | `everyItem(matcher)`      | All items in list must match condition | `body("scores", everyItem(greaterThan(50)))`               |
 * | `anyOf(m1, m2)`           | Logical OR of multiple matchers        | `body("status", anyOf(equalTo("success"), equalTo("ok")))` |
 * | `allOf(m1, m2)`           | Logical AND of multiple matchers       | `body("name", allOf(startsWith("S"), endsWith("h")))`      |
 */

//for validating data types of the values in the json response
/**
 * | 🧪 Method           | ✅ Checks If Node Is...           | 📘 Example Value        |
 * | ------------------- | --------------------------------- | ----------------------- |
 * | `isObject()`        | JSON Object (`{}`)                | `{ "name": "Siva" }`    |
 * | `isArray()`         | JSON Array (`[]`)                 | `[1, 2, 3]`             |
 * | `isTextual()`       | JSON String                       | `"India"`               |
 * | `isNumber()`        | Any number (int, float, etc.)     | `42`, `3.14`            |
 * | `isInt()`           | Integer                           | `123`                   |
 * | `isLong()`          | Long                              | `1234567890123`         |
 * | `isFloat()`         | Float                             | `3.14f`                 |
 * | `isDouble()`        | Double                            | `3.14`                  |
 * | `isBigDecimal()`    | BigDecimal                        | `"12345.6789"`          |
 * | `isBigInteger()`    | BigInteger                        | Very large integer      |
 * | `isBoolean()`       | Boolean                           | `true`, `false`         |
 * | `isNull()`          | JSON `null`                       | `null`                  |
 * | `isMissingNode()`   | Not present in JSON at all        | N/A                     |
 * | `isBinary()`        | Binary data (base64)              | `"SGVsbG8="`            |
 * | `isPojo()`          | A custom Java object (rare)       | `new MyPojo()`          |
 * | `isValueNode()`     | Any primitive: string/number/bool | `"text"`, `123`, `true` |
 * | `isContainerNode()` | Either an object or array         | `{...}` or `[...]`      |
 */
public class AllAssertions {
    @Test
    public void getByName() throws JsonProcessingException {

        RequestSetup requestSetup = new RequestSetup();
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

        JsonNode borders = jsonNode.get(0).get("borders");
        System.out.println(borders);
        //assertions

        //for status code
        assertThat(response.getStatusCode(), equalTo(200));

        //for status line
        assertThat(response.getStatusLine(), containsString("OK"));

        //response time
//        assertThat(response.time(), lessThan(5000L));
        //for checking value in the list
        List<String> borders1 = response.jsonPath().getList("[0].borders");

        assertThat(borders1, hasItem("MMR"));
        assertThat(borders1, hasItems("MMR", "CHN"));

        Assert.assertEquals(".in", value);

        //using contains
        assertThat(response.getHeader("Content-Type"), containsString("application/json"));

        assertThat(borders1, containsInAnyOrder("BGD", "BTN", "PAK", "CHN", "NPL", "MMR"));

        assertThat(borders1, contains ("BGD", "BTN", "MMR", "CHN", "NPL", "PAK"));

        //if u want to assert data type of json response
        assertThat(response.asString(), matchesJsonSchemaInClasspath("schemas/user_schema.json"));


        //if u want to assert particular field
        assertThat(response.jsonPath().get("[0].name.common"),instanceOf(String.class));

        //using isA
        assertThat(response.jsonPath().get("[0].name.common"), isA(String.class));

        //using Jsonnode
        JsonNode common = jsonNode.get(0).get("name").get("common");
        assertTrue(common.isTextual());




    }
}
