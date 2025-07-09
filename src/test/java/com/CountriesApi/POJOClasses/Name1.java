package com.CountriesApi.POJOClasses;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)

public class Name1 {
    public String common;
    public String official;
    public NativeName nativeName;

    public String getCommon() {
        return common;
    }

    public void setCommon(String common) {
        this.common = common;
    }

    public String getOfficial() {
        return official;
    }

    public void setOfficial(String official) {
        this.official = official;
    }

    public NativeName getNativeName() {
        return nativeName;
    }

    public void setNativeName(NativeName nativeName) {
        this.nativeName = nativeName;
    }
}
