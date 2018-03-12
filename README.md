1. Checkout branch: 'final-version-we-work' 

2. Run:  npm install

3. Run:  npm run start:dev   to open project in the browser http://localhost:8080


How it works:

1. On initial load if the url is http://localhost:8080 then the  trending images will be loaded. 

2. The page displays the search form and trending images

3. When user submit the form with a search term entered, the list of results is displayed. 
   The url of the page is updated with the query string of the performed search 
   If you copy the updated url and open in the new browser window, the same result will be displayd


4. The application state is managed with Redux.  
    The state tree has following entries: 
            data         -    for fetched images
            searchTerms  -    for the archives search terms
            searchForm   -    for user's form inputs. 

5.  I used the location object  to update the url with the search query ( this was not required)  so user could bookmark this search    

