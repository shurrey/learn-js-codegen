# LearnApIs.Body19

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parentId** | **String** | The ID of this category&#x27;s parent category | [optional] 
**categoryId** | **String** | The human-readable id of the category | 
**title** | **String** | The title of category | 
**description** | **String** | The description of the category | [optional] 
**frontPage** | **Boolean** | Boolean indicating whether or not the category should appear on the catalog front page | [optional] 
**available** | **Boolean** | Boolean indicating whether or not the category is available | 
**restricted** | **Boolean** | Boolean indicating whether or not category is available to all roles, or restricted to a specific set of roles. | [optional] 
**institutionRoleIds** | **[String]** | The roles for which this category is available, if category is set to restricted. Not populated for lists of categories, only for individual category | [optional] 
