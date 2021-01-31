# LearnApIs.CourseGradebookCategoriesApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1CoursesCourseIdGradebookCategoriesCategoryIdGet**](CourseGradebookCategoriesApi.md#learnApiPublicV1CoursesCourseIdGradebookCategoriesCategoryIdGet) | **GET** /learn/api/public/v1/courses/{courseId}/gradebook/categories/{categoryId} | Get Gradebook Category
[**learnApiPublicV1CoursesCourseIdGradebookCategoriesGet**](CourseGradebookCategoriesApi.md#learnApiPublicV1CoursesCourseIdGradebookCategoriesGet) | **GET** /learn/api/public/v1/courses/{courseId}/gradebook/categories | Get Gradebook Categories

<a name="learnApiPublicV1CoursesCourseIdGradebookCategoriesCategoryIdGet"></a>
# **learnApiPublicV1CoursesCourseIdGradebookCategoriesCategoryIdGet**
> GradebookCategory learnApiPublicV1CoursesCourseIdGradebookCategoriesCategoryIdGet(courseId, categoryId, opts)

Get Gradebook Category

Returns the details of a gradebook category  Users with entitlements &#x27;course.gradebook.MODIFY&#x27; or &#x27;course.user.grades.VIEW&#x27;, or users enrolled in the specified course can retrieve gradebook category details.  **Since**: 3400.2.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradebookCategoriesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let categoryId = "categoryId_example"; // String | the ID of the category to return
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdGradebookCategoriesCategoryIdGet(courseId, categoryId, opts, (error, data, response) => {
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
 **categoryId** | **String**| the ID of the category to return | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**GradebookCategory**](GradebookCategory.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdGradebookCategoriesGet"></a>
# **learnApiPublicV1CoursesCourseIdGradebookCategoriesGet**
> InlineResponse20016 learnApiPublicV1CoursesCourseIdGradebookCategoriesGet(courseId, opts)

Get Gradebook Categories

Returns a list of gradebook categories in a particular course.  Users with entitlements &#x27;course.gradebook.MODIFY&#x27; or &#x27;course.user.grades.VIEW&#x27;, or users enrolled in the specified course can retrieve the list of gradebook categories.  **Since**: 3400.2.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseGradebookCategoriesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56 // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
};
apiInstance.learnApiPublicV1CoursesCourseIdGradebookCategoriesGet(courseId, opts, (error, data, response) => {
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

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

