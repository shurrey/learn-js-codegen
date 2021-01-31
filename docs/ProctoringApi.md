# LearnApIs.ProctoringApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1ProctoringServicesGet**](ProctoringApi.md#learnApiPublicV1ProctoringServicesGet) | **GET** /learn/api/public/v1/proctoring/services | Get Proctoring Services
[**learnApiPublicV1ProctoringServicesProctoringServiceIdGet**](ProctoringApi.md#learnApiPublicV1ProctoringServicesProctoringServiceIdGet) | **GET** /learn/api/public/v1/proctoring/services/{proctoringServiceId} | Get Proctoring Service

<a name="learnApiPublicV1ProctoringServicesGet"></a>
# **learnApiPublicV1ProctoringServicesGet**
> InlineResponse20038 learnApiPublicV1ProctoringServicesGet(opts)

Get Proctoring Services

Returns a list of proctoring services Supports the standard paging query parameters, with a maximum page size of 1000. No entitlement check is performed as this data is not restricted. Any secure fields such as keys/secrets are not included in the results.  **Since**: 3500.6.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.ProctoringApi();
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'availabilityAvailable': "availabilityAvailable_example", // String | Search for proctoring services with availability.available properties that contain this value.   | Type      | Description  | --------- | --------- | | Yes |  | | No |  | 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1ProctoringServicesGet(opts, (error, data, response) => {
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
 **availabilityAvailable** | **String**| Search for proctoring services with availability.available properties that contain this value.   | Type      | Description  | --------- | --------- | | Yes |  | | No |  |  | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20038**](InlineResponse20038.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1ProctoringServicesProctoringServiceIdGet"></a>
# **learnApiPublicV1ProctoringServicesProctoringServiceIdGet**
> ProctoringService learnApiPublicV1ProctoringServicesProctoringServiceIdGet(proctoringServiceId, opts)

Get Proctoring Service

Returns the proctoring service with the specified Id No entitlement check is performed as this data is not restricted. Any secure fields such as keys/secrets are not included in the results.  **Since**: 3500.6.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.ProctoringApi();
let proctoringServiceId = "proctoringServiceId_example"; // String | 
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1ProctoringServicesProctoringServiceIdGet(proctoringServiceId, opts, (error, data, response) => {
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
 **proctoringServiceId** | **String**|  | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**ProctoringService**](ProctoringService.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

