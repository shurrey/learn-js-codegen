# LearnApIs.CalendarItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Calendar item identifier that indicates the id of the calendar item source which the item was created from. (Ex. &#x27;_417_1&#x27;) | [optional] 
**type** | **String** | The type of this Calendar Item.   | Type      | Description  | --------- | --------- | | Course |  | | GradebookColumn | Read only. | | Institution |  | | OfficeHours |  | | Personal |  |  | [optional] 
**calendarId** | **String** | Calendar source identifier which indicates the calendar on which the calendar item was created. Examples of possible values : \&quot;PERSONAL\&quot;, \&quot;INSTITUTION\&quot;, and course id in the format of \&quot;_3_1\&quot;. | [optional] 
**calendarName** | **String** | Calendar source label/display name. | [optional] 
**title** | **String** | Title of the calendar item. Title length cannot exceed 255 characters. | [optional] 
**description** | **String** | Description of the calendar item. | [optional] 
**location** | **String** | Location of the calendar item and it cannot exceed 1024 characters. | [optional] 
**start** | **Date** | Start date of the calendar item either in the past if the calendar item is for an event that&#x27;s already started OR in the future if it&#x27;s for an event to start in the future. This is always set and should occur before the end date. | [optional] 
**end** | **Date** | End date of the calendar item either in the past if the calendar item is for an event that&#x27;s already end OR in the future if it&#x27;s for an event to end in the future. This is always set and should occur after the start date. | [optional] 
**modified** | **Date** | Date when the calendar item was last modified. | [optional] 
**color** | **String** | Color to use for the calendar item. It&#x27;s a shared setting for all calendar items with the same calendar source identifier. | [optional] 
**disableResizing** | **Boolean** | Whether resizing of the calendar item should NOT be allowed. | [optional] 
**createdByUserId** | **String** | Get the user who created this calendar item. This will be null for non-personal events when the creator has been deleted. | [optional] 
**dynamicCalendarItemProps** | [**DynamicCalendarItemProps**](DynamicCalendarItemProps.md) |  | [optional] 
**recurrence** | [**CalendarItemRecurrence**](CalendarItemRecurrence.md) |  | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `Course` (value: `"Course"`)
* `GradebookColumn` (value: `"GradebookColumn"`)
* `Institution` (value: `"Institution"`)
* `OfficeHours` (value: `"OfficeHours"`)
* `Personal` (value: `"Personal"`)

