# LearnApIs.TermsApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1TermsGet**](TermsApi.md#learnApiPublicV1TermsGet) | **GET** /learn/api/public/v1/terms | Get Terms
[**learnApiPublicV1TermsPost**](TermsApi.md#learnApiPublicV1TermsPost) | **POST** /learn/api/public/v1/terms | Create Term
[**learnApiPublicV1TermsTermIdDelete**](TermsApi.md#learnApiPublicV1TermsTermIdDelete) | **DELETE** /learn/api/public/v1/terms/{termId} | Delete Term
[**learnApiPublicV1TermsTermIdGet**](TermsApi.md#learnApiPublicV1TermsTermIdGet) | **GET** /learn/api/public/v1/terms/{termId} | Get Term
[**learnApiPublicV1TermsTermIdPatch**](TermsApi.md#learnApiPublicV1TermsTermIdPatch) | **PATCH** /learn/api/public/v1/terms/{termId} | Update Term

<a name="learnApiPublicV1TermsGet"></a>
# **learnApiPublicV1TermsGet**
> InlineResponse20044 learnApiPublicV1TermsGet(opts)

Get Terms

Returns a list of terms.  At least one of the entitlements &#x27;system.term.VIEW&#x27; or &#x27;system.term.MODIFY&#x27; are needed.  **Since**: 3000.1.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.TermsApi();
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'externalId': "externalId_example", // String | Search for term with externalId properties that contain this value.  **Since**: 3100.6.0
  'dataSourceId': "dataSourceId_example", // String | Search for term with this dataSourceId.  **Since**: 3100.6.0
  'availabilityAvailable': "availabilityAvailable_example", // String | Search for users with availability.available properties that contain this value.  **Since**: 3100.6.0   | Type      | Description  | --------- | --------- | | Yes | Students may access the term and the courses it contains. | | No | Students may not access the term or the courses it contains. | 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1TermsGet(opts, (error, data, response) => {
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
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 
 **externalId** | **String**| Search for term with externalId properties that contain this value.  **Since**: 3100.6.0 | [optional] 
 **dataSourceId** | **String**| Search for term with this dataSourceId.  **Since**: 3100.6.0 | [optional] 
 **availabilityAvailable** | **String**| Search for users with availability.available properties that contain this value.  **Since**: 3100.6.0   | Type      | Description  | --------- | --------- | | Yes | Students may access the term and the courses it contains. | | No | Students may not access the term or the courses it contains. |  | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20044**](InlineResponse20044.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1TermsPost"></a>
# **learnApiPublicV1TermsPost**
> Term learnApiPublicV1TermsPost(body, opts)

Create Term

Creates a term.  The &#x27;system.term.MODIFY&#x27; entitlement is needed.  **Since**: 2015.11.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.TermsApi();
let body = new LearnApIs.Body56(); // Body56 | JSON input object.
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1TermsPost(body, opts, (error, data, response) => {
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
 **body** | [**Body56**](Body56.md)| JSON input object. | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**Term**](Term.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV1TermsTermIdDelete"></a>
# **learnApiPublicV1TermsTermIdDelete**
> learnApiPublicV1TermsTermIdDelete(termId)

Delete Term

Deletes a term.  The &#x27;system.term.MODIFY&#x27; entitlement is needed.  **Since**: 2015.11.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.TermsApi();
let termId = "termId_example"; // String | The term ID.  This may be the primary ID, or the secondary ID prefixed with the ID type.    | ID type    | Example                |  |------------|------------------------|  | primary    | _123_1                 |  | externalId | externalId:spring.2016 |  

apiInstance.learnApiPublicV1TermsTermIdDelete(termId, (error, data, response) => {
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
 **termId** | **String**| The term ID.  This may be the primary ID, or the secondary ID prefixed with the ID type.    | ID type    | Example                |  |------------|------------------------|  | primary    | _123_1                 |  | externalId | externalId:spring.2016 |   | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1TermsTermIdGet"></a>
# **learnApiPublicV1TermsTermIdGet**
> Term learnApiPublicV1TermsTermIdGet(termId, opts)

Get Term

Loads a term.  The caller must be enrolled in a course contained within the term, or must have at least one of the entitlements &#x27;system.term.VIEW&#x27; or &#x27;system.term.MODIFY&#x27;.  **Since**: 2015.11.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.TermsApi();
let termId = "termId_example"; // String | The term ID.  This may be the primary ID, or the secondary ID prefixed with the ID type.    | ID type    | Example                |  |------------|------------------------|  | primary    | _123_1                 |  | externalId | externalId:spring.2016 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1TermsTermIdGet(termId, opts, (error, data, response) => {
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
 **termId** | **String**| The term ID.  This may be the primary ID, or the secondary ID prefixed with the ID type.    | ID type    | Example                |  |------------|------------------------|  | primary    | _123_1                 |  | externalId | externalId:spring.2016 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**Term**](Term.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1TermsTermIdPatch"></a>
# **learnApiPublicV1TermsTermIdPatch**
> Term learnApiPublicV1TermsTermIdPatch(bodytermId, opts)

Update Term

Updates a term.  The &#x27;system.term.MODIFY&#x27; entitlement is needed.  **Since**: 2015.11.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.TermsApi();
let body = new LearnApIs.Body57(); // Body57 | JSON input object.
let termId = "termId_example"; // String | The term ID.  This may be the primary ID, or the secondary ID prefixed with the ID type.    | ID type    | Example                |  |------------|------------------------|  | primary    | _123_1                 |  | externalId | externalId:spring.2016 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1TermsTermIdPatch(bodytermId, opts, (error, data, response) => {
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
 **body** | [**Body57**](Body57.md)| JSON input object. | 
 **termId** | **String**| The term ID.  This may be the primary ID, or the secondary ID prefixed with the ID type.    | ID type    | Example                |  |------------|------------------------|  | primary    | _123_1                 |  | externalId | externalId:spring.2016 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**Term**](Term.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

