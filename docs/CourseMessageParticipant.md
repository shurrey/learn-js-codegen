# LearnApIs.CourseMessageParticipant

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messageId** | **String** | The id of the message | [optional] 
**userId** | **String** | The id of the participant | [optional] 
**user** | [**User**](User.md) |  | [optional] 
**participationType** | **String** | The type of participation   | Type      | Description  | --------- | --------- | | From | Sender user from the message | | To | The to or recipient user of the message | | Cc | The cc user of the message | | Bcc | The bcc user of the message |  | [optional] 

<a name="ParticipationTypeEnum"></a>
## Enum: ParticipationTypeEnum

* `From` (value: `"From"`)
* `To` (value: `"To"`)
* `Cc` (value: `"Cc"`)
* `Bcc` (value: `"Bcc"`)

