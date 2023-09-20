package com.mwororokevin.smallbusinessmanagement.util;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class GenerateUniqueUsername {
    public static String getUserName(String otherNames, String surname) {
        String username = "";

        List<String> namesList = new ArrayList<String>();

        if(otherNames.contains(" ")) {
            namesList = new ArrayList<String>(Arrays.asList(otherNames.split(" ")));
            namesList.add(surname);
        } else {
            namesList.add(otherNames);
            namesList.add(surname);
        }
        username = namesList.get(0) + "." + namesList.get(1);

        return username.toLowerCase();
    }
}
