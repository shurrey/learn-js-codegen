# LearnApIs.Duration

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Indicates whether this System Announcement is always displayed (Permanent) or if it is shown only between the Start and End dates (Restricted).   | Type      | Description  | --------- | --------- | | Permanent | The Announcement will always be displayed. | | Restricted | The Announcement will start being displayed on Duration.Start and stop being displayed on Duration.End |  | [optional] 
**start** | **Date** | The date this Announcement starts being Available. | [optional] 
**end** | **Date** | The date this Announcement stops being Available. | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `Permanent` (value: `"Permanent"`)
* `Restricted` (value: `"Restricted"`)

