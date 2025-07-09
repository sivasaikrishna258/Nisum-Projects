/**🌍 What is World in Cucumber?
In Cucumber, the World is a special object that represents the context for each scenario. 
It’s automatically created once per scenario and is shared across all the steps of that scenario using the this keyword in regular functions.

🔄 Lifecycle
Event	            World Behavior
Scenario start	    New instance of World created
During steps	    this refers to that instance
Scenario end	    Instance is destroyed

* Must use regular function() to access this keyword
* Cannot use arrow functions as they do not bind this




*/

//* questions need to clarified
// 1.what we do in config file
// 2.just go through the playwright framework once because to know about global setup and teardown
// 3. go through the fixtures concept in playwright
// 4. differnce between fixtures and hooks
// 5. difference between oauth and jwt token
// 6. difference between oauth and bearer token