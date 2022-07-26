### **02/08 | Sam & Philip | Create offline data**

1. Created libs/offlineData.js to be used in lieu of calling API
2. Commented functionality which calls API from index.js- substituted it with an import of offlineData.js
3. Deleted things we don't need from offlineData.js (number of reviews, ranking etc.)
4. Deleted things we don't need from PlaceDetail.js (number of reviews, ranking etc.)
5. Added accesibility item to offlineData.js (see below for format)
6. Added some minor bits and bops that we need to offlineData.js (phone number, web adddress, opening times etc.)
7. Updated Undefined_manifesto.md
8. Simplified path to venue photo in offlineData.js

<br>

### **02/08 | Kendall & Philip | Clean up the header**

1. get the header to the appropriate height DONE
2. Render and style the filter-by-rating component (separate button? part of searchbar?) DONE
3. Render logo DONE
4. Center the logo & searchbar and.
   a. Get the searchbar and logo to have the size we want
   b. Get the searchbar and logo to be positioned where we want (logo on the left, searchbar in the middle)
5. Get rid of ghost div in the header DONE
6. Fix the overlap of List DONE

7. Give the logo desired behaviour (yeets the user to the landing page)

# Standards

### Accesibility items in our database

```
acessibility: {
      step_free: {
        token: "step_free",
        label: "This venue has step-free access.",
      },
      braille: {
        token: "braille",
        label: "This venue has materials printed in Braille alphabet.",
      },
      sign_lang: {
        token: "sign_lang",
        label: "This venue employs staff who know British Sign Language.",
      },
      quiet: {
        token: "quiet",
        label: "This venue has a quiet zone.",
      },
    },
```
