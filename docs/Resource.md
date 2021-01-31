# LearnApIs.Resource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The primary ID the Resource. | [optional] 
**name** | **String** | The name of the Resource. | [optional] 
**type** | **String** | The type of the Resource; &#x27;File&#x27; or &#x27;Folder&#x27;   | Type      | Description  | --------- | --------- | | File |  | | Folder |  |  | [optional] 
**size** | **Number** | The size of the Resource in bytes. | [optional] 
**hasLinks** | **Boolean** | Whether the Resource has associated Course Content links. | [optional] 
**parentId** | **String** | The Id of the of the Resource&#x27;s parent folder. | [optional] 
**creatorId** | **String** | The Id of the User who created the Resource. | [optional] 
**created** | **Date** | The date this Resource was created. | [optional] 
**modified** | **Date** | The date this Resource was last modified. | [optional] 
**mimeType** | **String** | The mime-type for this Resource; only set if the Resource is of type &#x27;File&#x27; | [optional] 
**version** | **Number** | The version number for this Resource; only set if the Resource is of type &#x27;File&#x27; and is versioned. | [optional] 
**downloadUrl** | **String** | The downloadUrl for this Resource; only set if the Resource is of type &#x27;File&#x27;. | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `File` (value: `"File"`)
* `Folder` (value: `"Folder"`)

