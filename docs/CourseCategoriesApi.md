# LearnApIs.CourseCategoriesApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdCoursesCourseIdDelete**](CourseCategoriesApi.md#learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdCoursesCourseIdDelete) | **DELETE** /learn/api/public/v1/catalog/categories/{categoryType}/{categoryId}/courses/{courseId} | Delete Membership
[**learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdCoursesCourseIdPut**](CourseCategoriesApi.md#learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdCoursesCourseIdPut) | **PUT** /learn/api/public/v1/catalog/categories/{categoryType}/{categoryId}/courses/{courseId} | Create Membership
[**learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdCoursesGet**](CourseCategoriesApi.md#learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdCoursesGet) | **GET** /learn/api/public/v1/catalog/categories/{categoryType}/{categoryId}/courses | Get Memberships
[**learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdDelete**](CourseCategoriesApi.md#learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdDelete) | **DELETE** /learn/api/public/v1/catalog/categories/{categoryType}/{categoryId} | Delete Category
[**learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdGet**](CourseCategoriesApi.md#learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdGet) | **GET** /learn/api/public/v1/catalog/categories/{categoryType}/{categoryId} | Get Category
[**learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdPatch**](CourseCategoriesApi.md#learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdPatch) | **PATCH** /learn/api/public/v1/catalog/categories/{categoryType}/{categoryId} | Update Category
[**learnApiPublicV1CatalogCategoriesCategoryTypeGet**](CourseCategoriesApi.md#learnApiPublicV1CatalogCategoriesCategoryTypeGet) | **GET** /learn/api/public/v1/catalog/categories/{categoryType} | Get Categories
[**learnApiPublicV1CatalogCategoriesCategoryTypeParentIdChildrenGet**](CourseCategoriesApi.md#learnApiPublicV1CatalogCategoriesCategoryTypeParentIdChildrenGet) | **GET** /learn/api/public/v1/catalog/categories/{categoryType}/{parentId}/children | Get Child Categories
[**learnApiPublicV1CatalogCategoriesCategoryTypePost**](CourseCategoriesApi.md#learnApiPublicV1CatalogCategoriesCategoryTypePost) | **POST** /learn/api/public/v1/catalog/categories/{categoryType} | Create Category
[**learnApiPublicV1CoursesCourseIdCategoriesGet**](CourseCategoriesApi.md#learnApiPublicV1CoursesCourseIdCategoriesGet) | **GET** /learn/api/public/v1/courses/{courseId}/categories | Get Memberships

<a name="learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdCoursesCourseIdDelete"></a>
# **learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdCoursesCourseIdDelete**
> learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdCoursesCourseIdDelete(categoryType, categoryId, courseId)

Delete Membership

Deletes a category/course association  The &#x27;admin.course.categorize.MODIFY&#x27; entitlement is needed for course associations The &#x27;admin.org.categorize.MODIFY&#x27; entitlement is needed for organization associations  **Since**: 3600.0.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseCategoriesApi();
let categoryType = "categoryType_example"; // String | 
let categoryId = "categoryId_example"; // String | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  

apiInstance.learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdCoursesCourseIdDelete(categoryType, categoryId, courseId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryType** | **String**|  | 
 **categoryId** | **String**|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdCoursesCourseIdPut"></a>
# **learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdCoursesCourseIdPut**
> CategoryCourseMembership learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdCoursesCourseIdPut(categoryType, categoryId, courseId, opts)

Create Membership

Creates a category/course association. The course defined by courseId must match the categoryType.  The &#x27;admin.course.categorize.MODIFY&#x27; entitlement is needed for course associations The &#x27;admin.org.categorize.MODIFY&#x27; entitlement is needed for organization associations  **Since**: 3600.0.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseCategoriesApi();
let categoryType = "categoryType_example"; // String | 
let categoryId = "categoryId_example"; // String | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdCoursesCourseIdPut(categoryType, categoryId, courseId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryType** | **String**|  | 
 **categoryId** | **String**|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**CategoryCourseMembership**](CategoryCourseMembership.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdCoursesGet"></a>
# **learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdCoursesGet**
> InlineResponse20012 learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdCoursesGet(categoryType, categoryId, opts)

Get Memberships

Get courses associated with the provided category. Entitlement system.course-categories.VIEW required  **Since**: 3600.0.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseCategoriesApi();
let categoryType = "categoryType_example"; // String | 
let categoryId = "categoryId_example"; // String | 
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'fields': "fields_example", // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
  'expand': "expand_example" // String | A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>course</li></ul>
};
apiInstance.learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdCoursesGet(categoryType, categoryId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryType** | **String**|  | 
 **categoryId** | **String**|  | 
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 
 **expand** | **String**| A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:&lt;br&gt;&lt;ul&gt;&lt;li&gt;course&lt;/li&gt;&lt;/ul&gt; | [optional] 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdDelete"></a>
# **learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdDelete**
> learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdDelete(categoryType, categoryId)

Delete Category

Deletes the category corresponding to the provided type and id  Entitlement system.course.categories.MODIFY required to delete a course category Entitlement system.org.categories.MODIFY required to delete an organization category  **Since**: 3600.0.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseCategoriesApi();
let categoryType = "categoryType_example"; // String | 
let categoryId = "categoryId_example"; // String | 

apiInstance.learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdDelete(categoryType, categoryId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryType** | **String**|  | 
 **categoryId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdGet"></a>
# **learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdGet**
> Category learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdGet(categoryType, categoryId, opts)

Get Category

Returns the category corresponding the provided type (course or organization) and ID  Entitlement system.course-categories.VIEW required  Users with entitlement \&quot;system.course.categories.MODIFY\&quot; for course categories, or \&quot;system.org.categories.MODIFY\&quot; for organization categories can view all fields and all categories.  Users with system.course-categories.VIEW but not the corresponding MODIFY entitlements have read access to all properties except:  - restricted - institutionRoleIds In addition, users without the corresponding MODIFY entitlement have access to a restricted category only if their institution role matches one of the roles in the institutionRoleIds list for that category.  **Since**: 3600.0.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseCategoriesApi();
let categoryType = "categoryType_example"; // String | 
let categoryId = "categoryId_example"; // String | 
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdGet(categoryType, categoryId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryType** | **String**|  | 
 **categoryId** | **String**|  | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**Category**](Category.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdPatch"></a>
# **learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdPatch**
> Category learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdPatch(bodycategoryTypecategoryId, opts)

Update Category

Updates the category corresponding to the provided type and id.  Entitlement system.course.categories.MODIFY required to modify course categories Entitlement system.org.categories.MODIFY required to modify organization categories  **Since**: 3600.0.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseCategoriesApi();
let body = new LearnApIs.Body20(); // Body20 | 
let categoryType = "categoryType_example"; // String | 
let categoryId = "categoryId_example"; // String | 
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CatalogCategoriesCategoryTypeCategoryIdPatch(bodycategoryTypecategoryId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body20**](Body20.md)|  | 
 **categoryType** | **String**|  | 
 **categoryId** | **String**|  | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**Category**](Category.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV1CatalogCategoriesCategoryTypeGet"></a>
# **learnApiPublicV1CatalogCategoriesCategoryTypeGet**
> InlineResponse20011 learnApiPublicV1CatalogCategoriesCategoryTypeGet(categoryType, opts)

Get Categories

Returns a list of categories of the provided type (course or organization)  Entitlement system.course-categories.VIEW required  Users with entitlement \&quot;system.course.categories.MODIFY\&quot; for course categories, or \&quot;system.org.categories.MODIFY\&quot; for organization categories can view all fields and all categories.  Users with system.course-categories.VIEW but not the corresponding MODIFY entitlements have read access to all properties except:  - restricted - institutionRoleIds In addition, users without the corresponding MODIFY entitlement have access to a restricted category only if their institution role matches one of the roles in the institutionRoleIds list for that category.  **Since**: 3600.0.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseCategoriesApi();
let categoryType = "categoryType_example"; // String | 
let opts = { 
  'sort': "sort_example", // String | Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc),start\" Supported fields are:  - id - categoryId - title - available - created  **Since**: 3700.6.0
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'title': "title_example", // String | Search for categories with titles that contain this value.  **Since**: 3700.8.0
  'categoryId': "categoryId_example", // String | Search for categories with category IDs that contain this value.  **Since**: 3700.8.0
  'created': new Date("2013-10-20T19:20:30+01:00"), // Date | Search for categories with a created date relative to this value.  **Since**: 3700.8.0
  'createdCompare': "createdCompare_example", // String | Used alongside the 'created' search parameter.  Supported values:  - lessThan - greaterOrEqual  Defaults to greaterOrEqual if not specified.  **Since**: 3700.8.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  | 
  'dataSourceId': "dataSourceId_example", // String | Search for categories with a data source id matching this value.  **Since**: 3700.9.0
  'frontPage': true, // Boolean | Search for categories with a front page indicator matching this value.  **Since**: 3700.9.0
  'available': true, // Boolean | Search for categories with availability matching this value.  **Since**: 3700.9.0
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CatalogCategoriesCategoryTypeGet(categoryType, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryType** | **String**|  | 
 **sort** | **String**| Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \&quot;(desc)\&quot; suffix to request a descending sort for that property. e.g. \&quot;title(desc),start\&quot; Supported fields are:  - id - categoryId - title - available - created  **Since**: 3700.6.0 | [optional] 
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 
 **title** | **String**| Search for categories with titles that contain this value.  **Since**: 3700.8.0 | [optional] 
 **categoryId** | **String**| Search for categories with category IDs that contain this value.  **Since**: 3700.8.0 | [optional] 
 **created** | **Date**| Search for categories with a created date relative to this value.  **Since**: 3700.8.0 | [optional] 
 **createdCompare** | **String**| Used alongside the &#x27;created&#x27; search parameter.  Supported values:  - lessThan - greaterOrEqual  Defaults to greaterOrEqual if not specified.  **Since**: 3700.8.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  |  | [optional] 
 **dataSourceId** | **String**| Search for categories with a data source id matching this value.  **Since**: 3700.9.0 | [optional] 
 **frontPage** | **Boolean**| Search for categories with a front page indicator matching this value.  **Since**: 3700.9.0 | [optional] 
 **available** | **Boolean**| Search for categories with availability matching this value.  **Since**: 3700.9.0 | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CatalogCategoriesCategoryTypeParentIdChildrenGet"></a>
# **learnApiPublicV1CatalogCategoriesCategoryTypeParentIdChildrenGet**
> InlineResponse20011 learnApiPublicV1CatalogCategoriesCategoryTypeParentIdChildrenGet(categoryType, parentId, opts)

Get Child Categories

Returns a list of categories which are children of the category corresponding to the provided type (course or organization) and Id  Entitlement system.course-categories.VIEW required  Users with entitlement \&quot;system.course.categories.MODIFY\&quot; for course categories, or \&quot;system.org.categories.MODIFY\&quot; for organization categories can view all fields and all categories.  Users with system.course-categories.VIEW but not the corresponding MODIFY entitlements have read access to all properties except:  - restricted - institutionRoleIds In addition, users without the corresponding MODIFY entitlement have access to a restricted category only if their institution role matches one of the roles in the institutionRoleIds list for that category.  **Since**: 3600.0.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseCategoriesApi();
let categoryType = "categoryType_example"; // String | 
let parentId = "parentId_example"; // String | 
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'sort': "sort_example", // String | Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc),start\" Supported fields are:  - id - categoryId - title - available - created  **Since**: 3700.6.0
  'title': "title_example", // String | Search for categories with titles that contain this value.  **Since**: 3700.8.0
  'categoryId': "categoryId_example", // String | Search for categories with category IDs that contain this value.  **Since**: 3700.8.0
  'created': new Date("2013-10-20T19:20:30+01:00"), // Date | Search for categories with a created date relative to this value.  **Since**: 3700.8.0
  'createdCompare': "createdCompare_example", // String | Used alongside the 'created' search parameter.  Supported values:  - lessThan - greaterOrEqual  Defaults to greaterOrEqual if not specified.  **Since**: 3700.8.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  | 
  'dataSourceId': "dataSourceId_example", // String | Search for categories with a data source id matching this value.  **Since**: 3700.9.0
  'frontPage': true, // Boolean | Search for categories with a front page indicator matching this value.  **Since**: 3700.9.0
  'available': true, // Boolean | Search for categories with availability matching this value.  **Since**: 3700.9.0
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CatalogCategoriesCategoryTypeParentIdChildrenGet(categoryType, parentId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryType** | **String**|  | 
 **parentId** | **String**|  | 
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 
 **sort** | **String**| Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \&quot;(desc)\&quot; suffix to request a descending sort for that property. e.g. \&quot;title(desc),start\&quot; Supported fields are:  - id - categoryId - title - available - created  **Since**: 3700.6.0 | [optional] 
 **title** | **String**| Search for categories with titles that contain this value.  **Since**: 3700.8.0 | [optional] 
 **categoryId** | **String**| Search for categories with category IDs that contain this value.  **Since**: 3700.8.0 | [optional] 
 **created** | **Date**| Search for categories with a created date relative to this value.  **Since**: 3700.8.0 | [optional] 
 **createdCompare** | **String**| Used alongside the &#x27;created&#x27; search parameter.  Supported values:  - lessThan - greaterOrEqual  Defaults to greaterOrEqual if not specified.  **Since**: 3700.8.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  |  | [optional] 
 **dataSourceId** | **String**| Search for categories with a data source id matching this value.  **Since**: 3700.9.0 | [optional] 
 **frontPage** | **Boolean**| Search for categories with a front page indicator matching this value.  **Since**: 3700.9.0 | [optional] 
 **available** | **Boolean**| Search for categories with availability matching this value.  **Since**: 3700.9.0 | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CatalogCategoriesCategoryTypePost"></a>
# **learnApiPublicV1CatalogCategoriesCategoryTypePost**
> Category learnApiPublicV1CatalogCategoriesCategoryTypePost(bodycategoryType, opts)

Create Category

Creates a new category of the provided type as defined in the request body  Entitlement system.course.categories.MODIFY required to create course categories Entitlement system.org.categories.MODIFY required to create organization categories  **Since**: 3600.0.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseCategoriesApi();
let body = new LearnApIs.Body19(); // Body19 | 
let categoryType = "categoryType_example"; // String | 
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CatalogCategoriesCategoryTypePost(bodycategoryType, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body19**](Body19.md)|  | 
 **categoryType** | **String**|  | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**Category**](Category.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdCategoriesGet"></a>
# **learnApiPublicV1CoursesCourseIdCategoriesGet**
> InlineResponse20013 learnApiPublicV1CoursesCourseIdCategoriesGet(courseId, opts)

Get Memberships

Get categories associated with the provided course. Entitlement system.course-categories.VIEW required  **Since**: 3600.0.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseCategoriesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'fields': "fields_example", // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
  'expand': "expand_example" // String | A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>category</li></ul>
};
apiInstance.learnApiPublicV1CoursesCourseIdCategoriesGet(courseId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 
 **expand** | **String**| A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:&lt;br&gt;&lt;ul&gt;&lt;li&gt;category&lt;/li&gt;&lt;/ul&gt; | [optional] 

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

