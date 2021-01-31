# LearnApIs.Category

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**dataSourceId** | **String** | The ID of the data source of the category | [optional] 
**parentId** | **String** | The ID of this category&#x27;s parent category | [optional] 
**categoryId** | **String** | The human-readable id of the category | [optional] 
**title** | **String** | The title of category | [optional] 
**description** | **String** | The description of the category | [optional] 
**type** | **String** | Type of category   | Type      | Description  | --------- | --------- | | Course |  | | Organization |  |  | [optional] 
**frontPage** | **Boolean** | Boolean indicating whether or not the category should appear on the catalog front page | [optional] 
**available** | **Boolean** | Boolean indicating whether or not the category is available | [optional] 
**restricted** | **Boolean** | Boolean indicating whether or not category is available to all roles, or restricted to a specific set of roles. | [optional] 
**institutionRoleIds** | **[String]** | The roles for which this category is available, if category is set to restricted. Not populated for lists of categories, only for individual category | [optional] 
**created** | **Date** | The date and time at which the category was created | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `Course` (value: `"Course"`)
* `Organization` (value: `"Organization"`)

