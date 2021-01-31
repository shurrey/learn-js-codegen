# LearnApIs.OAuth2Error

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **String** | Error code indicating high level source of error   | Type      | Description  | --------- | --------- | | invalid_request | The request is missing a required parameter, includes an unsupported parameter value (other than grant type), repeats a parameter, includes multiple credentials, utilizes more than one mechanism for authenticating the client, or is otherwise malformed. | | invalid_client | Client authentication failed (e.g., unknown client, no client authentication included, or unsupported authentication method).  The authorization server MAY return an HTTP 401 (Unauthorized) status code to indicate which HTTP authentication schemes are supported.  If the client attempted to authenticate via the &#x27;Authorization&#x27; request header field, the authorization server MUST respond with an HTTP 401 (Unauthorized) status code and include the &#x27;WWW-Authenticate&#x27; response header field matching the authentication scheme used by the client. | | invalid_grant | The provided authorization grant (e.g., authorization code, resource owner credentials) or refresh token is invalid, expired, revoked, does not match the redirection URI used in the authorization request, or was issued to another client. | | unauthorized_client | The authenticated client is not authorized to use this authorization grant type. | | unsupported_grant_type | The authorization grant type is not supported by the authorization server. | | invalid_scope | The requested scope is invalid, unknown, malformed, or exceeds the scope granted by the resource owner. | | unsupported_response_type | The authorization server does not support obtaining an authorization code using this method. | | server_error | The authorization server encountered an unexpected condition that prevented it from fulfilling the request. (This error code is needed because a 500 Internal Server Error HTTP status code cannot be returned to the client via a HTTP redirect.) |  | [optional] 
**errorDescription** | **String** | Optional text providing additional information about the error condition. | [optional] 

<a name="ErrorEnum"></a>
## Enum: ErrorEnum

* `invalid_request` (value: `"invalid_request"`)
* `invalid_client` (value: `"invalid_client"`)
* `invalid_grant` (value: `"invalid_grant"`)
* `unauthorized_client` (value: `"unauthorized_client"`)
* `unsupported_grant_type` (value: `"unsupported_grant_type"`)
* `invalid_scope` (value: `"invalid_scope"`)
* `unsupported_response_type` (value: `"unsupported_response_type"`)
* `server_error` (value: `"server_error"`)

