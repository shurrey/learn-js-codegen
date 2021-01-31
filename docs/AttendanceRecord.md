# LearnApIs.AttendanceRecord

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The primary ID of the attendance record. | [optional] 
**meetingId** | **String** | The primary id of the meeting. | [optional] 
**userId** | **String** | The learn external id of the user. | [optional] 
**status** | **String** | The attendance status of the user.   | Type      | Description  | --------- | --------- | | Absent |  | | Late |  | | Present |  | | Excused |  |  | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `Absent` (value: `"Absent"`)
* `Late` (value: `"Late"`)
* `Present` (value: `"Present"`)
* `Excused` (value: `"Excused"`)

