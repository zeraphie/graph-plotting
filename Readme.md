- I wanted to limit myself in regards to time
- Vite was used as an easy start to creating a react app because it's faster to setup
- Vitest was used in place of jest because vite doesn't fully support how jest works, and has a similar usage
- React hook forms was used in order to use a stateless management of changing filters
- Redux wasn't used because for a dataset of this kind I didn't think any state management was needed
- With the use case for this graph, I thought about including more information,
  like the name of the user etc, but I decided against using any PII because it wouldn't add any value
  to the scatter plot and could be a cause of concern with gdpr depending on who can access the graph
- I kept things reasonably dynamic if different values were wanted however, since there are a few columns
  that could be used, but I'm not 100% sure how I would use them

- Improvements
  - Make a selectable range of letters for the country filter to replace the radio buttons
  - Pick what is on the yAxis with the data provided (being able to pick from `annual Salary, credit card debt, net worth, car purchase amount`)
  - Sanitise the input from the csv, there are accents on some of the letters, and the reading of the data in the current solution renders them as ?
  - Make the graph scroll on the xAxis due to the sheer quantity of countries available, at the moment it shows a subset
  - Reflect the data in the markers in a consistent way (i.e. show a value like 60k instead of 60193.5598)
  - Make the xAxis fully legible for countries, either by extending overflow or by shortening longer named countries to country codes, like EN for England