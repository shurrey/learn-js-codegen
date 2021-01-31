# LearnApIs.Body8

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | Title of the calendar item. Title length cannot exceed 255 characters. | [optional] 
**description** | **String** | Description of the calendar item. | [optional] 
**location** | **String** | Location of the calendar item and it cannot exceed 1024 characters. | [optional] 
**start** | **Date** | Start date of the calendar item either in the past if the calendar item is for an event that&#x27;s already started OR in the future if it&#x27;s for an event to start in the future. This is always set and should occur before the end date. | [optional] 
**end** | **Date** | End date of the calendar item either in the past if the calendar item is for an event that&#x27;s already end OR in the future if it&#x27;s for an event to end in the future. This is always set and should occur after the start date. | [optional] 
**disableResizing** | **Boolean** | Whether resizing of the calendar item should NOT be allowed. | [optional] 
**dynamicCalendarItemProps** | [**DynamicCalendarItemProps**](DynamicCalendarItemProps.md) |  | [optional] 
**recurrence** | [**CalendarItemRecurrence**](CalendarItemRecurrence.md) |  | [optional] 
