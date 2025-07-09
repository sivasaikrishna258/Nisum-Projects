package com.countries.POJOClasses.countryPOJO;

public class Name {
    private String common;
    private String official;
    private NativeName nativeName;

    // Getters and Setters

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