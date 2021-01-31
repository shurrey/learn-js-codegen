# LearnApIs.SessionsApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1SessionsGet**](SessionsApi.md#learnApiPublicV1SessionsGet) | **GET** /learn/api/public/v1/sessions | Get Active Sessions

<a name="learnApiPublicV1SessionsGet"></a>
# **learnApiPublicV1SessionsGet**
> InlineResponse20042 learnApiPublicV1SessionsGet(opts)

Get Active Sessions

List active user sessions in Learn.  Users with the following entitlement can view others session:  - system.user.sessions.VIEW &lt;/p&gt;  Also with users with any of the following entitlements can view the users information using the expand param:  - system.user.VIEW - user.VIEW &lt;/p&gt;  **Since**: 3800.4.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.SessionsApi();
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'fields': "fields_example", // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
  'expand': "expand_example" // String | A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>user</li></ul>
};
apiInstance.learnApiPublicV1SessionsGet(opts, (error, data, response) => {
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
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 
 **expand** | **String**| A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:&lt;br&gt;&lt;ul&gt;&lt;li&gt;user&lt;/li&gt;&lt;/ul&gt; | [optional] 

### Return type

[**InlineResponse20042**](InlineResponse20042.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

