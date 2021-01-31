# LearnApIs.OauthApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1Oauth2AuthorizationcodeGet**](OauthApi.md#learnApiPublicV1Oauth2AuthorizationcodeGet) | **GET** /learn/api/public/v1/oauth2/authorizationcode | Authorization Code
[**learnApiPublicV1Oauth2TokenPost**](OauthApi.md#learnApiPublicV1Oauth2TokenPost) | **POST** /learn/api/public/v1/oauth2/token | Request Token
[**learnApiPublicV1Oauth2TokeninfoGet**](OauthApi.md#learnApiPublicV1Oauth2TokeninfoGet) | **GET** /learn/api/public/v1/oauth2/tokeninfo | Get Token Info

<a name="learnApiPublicV1Oauth2AuthorizationcodeGet"></a>
# **learnApiPublicV1Oauth2AuthorizationcodeGet**
> learnApiPublicV1Oauth2AuthorizationcodeGet(opts)

Authorization Code

Requests an OAuth 2 authorization code. Use of PKCE standard is optional, but highly recommended.  **Since**: 3200.7.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.OauthApi();
let opts = { 
  'redirectUri': "redirectUri_example", // String | the redirectUri to send the end user to once an authorization code response is made in Oauth2 Authorization Code Workflow
  'responseType': "responseType_example", // String | Required. The response_type expected which must to be set to \"code\"
  'clientId': "clientId_example", // String | Required. The client identifier for the registered application.
  'scope': "scope_example", // String | the space delimited scope(s) being requested for this authorization. Example value: \"read write offline\"
  'state': "state_example", // String | Opaque value used by client to maintain state between request and callback. Used to prevent cross-site request forgery.
  'codeChallenge': "codeChallenge_example", // String | A code challenge to verify credentials along with the granted authorization code. It is used with the PKCE standard.  **Since**: 3700.4.0
  'codeChallengeMethod': "codeChallengeMethod_example" // String | This is the method used to verify the code challenge using the PKCE standard. Blackboard only supports s256 as the code challenge method.  **Since**: 3700.4.0
};
apiInstance.learnApiPublicV1Oauth2AuthorizationcodeGet(opts, (error, data, response) => {
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
 **redirectUri** | **String**| the redirectUri to send the end user to once an authorization code response is made in Oauth2 Authorization Code Workflow | [optional] 
 **responseType** | **String**| Required. The response_type expected which must to be set to \&quot;code\&quot; | [optional] 
 **clientId** | **String**| Required. The client identifier for the registered application. | [optional] 
 **scope** | **String**| the space delimited scope(s) being requested for this authorization. Example value: \&quot;read write offline\&quot; | [optional] 
 **state** | **String**| Opaque value used by client to maintain state between request and callback. Used to prevent cross-site request forgery. | [optional] 
 **codeChallenge** | **String**| A code challenge to verify credentials along with the granted authorization code. It is used with the PKCE standard.  **Since**: 3700.4.0 | [optional] 
 **codeChallengeMethod** | **String**| This is the method used to verify the code challenge using the PKCE standard. Blackboard only supports s256 as the code challenge method.  **Since**: 3700.4.0 | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="learnApiPublicV1Oauth2TokenPost"></a>
# **learnApiPublicV1Oauth2TokenPost**
> OAuth2AccessToken learnApiPublicV1Oauth2TokenPost(opts)

Request Token

Requests an OAuth 2 access token.  **Since**: 2015.11.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

let apiInstance = new LearnApIs.OauthApi();
let opts = { 
  'grantType': "grantType_example", // String | The Grant Type. Acceptable values include: 'client_credentials', 'authorization_code' (since 3200.7.0), or 'refresh_token' (since 3200.7.0).
  'code': "code_example", // String | The authorization code granted by an end user for use by an application in Oauth2 Authorization Code Workflow
  'redirectUri': "redirectUri_example", // String | The redirectUri to send the end user to once an access token response is made in Oauth2 Authorization Code Workflow  **Since**: 3200.7.0
  'refreshToken': "refreshToken_example", // String | The refresh token granted for use by an application in Oauth2 Refresh Token Workflow  **Since**: 3200.7.0
  'codeVerifier': "codeVerifier_example" // String | The code_verifier to be passed along with authorization code if PKCE standard was used to grant the authorization code.  **Since**: 3700.4.0
};
apiInstance.learnApiPublicV1Oauth2TokenPost(opts, (error, data, response) => {
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
 **grantType** | **String**| The Grant Type. Acceptable values include: &#x27;client_credentials&#x27;, &#x27;authorization_code&#x27; (since 3200.7.0), or &#x27;refresh_token&#x27; (since 3200.7.0). | [optional] 
 **code** | **String**| The authorization code granted by an end user for use by an application in Oauth2 Authorization Code Workflow | [optional] 
 **redirectUri** | **String**| The redirectUri to send the end user to once an access token response is made in Oauth2 Authorization Code Workflow  **Since**: 3200.7.0 | [optional] 
 **refreshToken** | **String**| The refresh token granted for use by an application in Oauth2 Refresh Token Workflow  **Since**: 3200.7.0 | [optional] 
 **codeVerifier** | **String**| The code_verifier to be passed along with authorization code if PKCE standard was used to grant the authorization code.  **Since**: 3700.4.0 | [optional] 

### Return type

[**OAuth2AccessToken**](OAuth2AccessToken.md)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1Oauth2TokeninfoGet"></a>
# **learnApiPublicV1Oauth2TokeninfoGet**
> OAuth2AccessTokenInfo learnApiPublicV1Oauth2TokeninfoGet(accessToken)

Get Token Info

Requests an OAuth 2 access token info.  **Since**: 3700.6.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.OauthApi();
let accessToken = "accessToken_example"; // String | The application key and secret, encoded using RFC 2617 Basic authentication.

apiInstance.learnApiPublicV1Oauth2TokeninfoGet(accessToken, (error, data, response) => {
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
 **accessToken** | **String**| The application key and secret, encoded using RFC 2617 Basic authentication. | 

### Return type

[**OAuth2AccessTokenInfo**](OAuth2AccessTokenInfo.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

