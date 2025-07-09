package com.countries.POJOClasses.mockPOJO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;


public class Capital {
private String currency;

private String cou;

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public String getCou() {
        return cou;
    }

    public void setCou(String cou) {
        this.cou = cou;
    }
}
