# Create a Garden Database

```
use gardenDB

{plantName: "Fuschia", yearsGrowing: 10, stillAlive: true, plantNutrition: ["nitrogen","potassium"]}

# Filter
{"plantName": "Fuschia"}
{"stillAlive":false}

# Update condition
{$set:{"yearsGrowing":11}}
{$set:{"stillAlive":false}}

{$push:{"plantNutrition":"phosphorus"}}



db.plants.updateMany({},{$inc: {"yearsGrowing": 1}})

```
