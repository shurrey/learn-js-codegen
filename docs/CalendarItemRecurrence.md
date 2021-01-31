# LearnApIs.CalendarItemRecurrence

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **Number** | Recurrence count indicating how many times the calendar item should be repeated. Either this count OR the &#x27;until&#x27; date is/&#x27;should be&#x27; set. When creating a calendar item, &#x27;until&#x27; date will be used if both &#x27;until&#x27; date and the count are set. | [optional] 
**frequency** | **String** | Frequency of the calendar item repeated.   | Type      | Description  | --------- | --------- | | Monthly |  | | Weekly |  | | Daily |  |  | [optional] 
**interval** | **Number** | Interval between recurrences depends on the repeating type. For example, if the calendar times should be repeated every three weeks, you need set interval to 3 as well as frequency to \&quot;Weekly\&quot;. Minimum and Maximum allowed Intervals are 1 and 100 respectively. | [optional] 
**monthRepeatDay** | **Number** | This property is used in conjunction with the &#x27;Monthly&#x27; frequency and it indicates on which day of the month the calendar item is/&#x27;should be&#x27; repeated on. The valid values are valid month days, that is, 1 to 31. Either this OR both &#x27;monthPosition&#x27; and &#x27;repeatDay&#x27; should be set to create a recurring calendar item with &#x27;Monthly&#x27; frequency. | [optional] 
**monthPosition** | **Number** | This property is used in conjunction with the &#x27;Monthly&#x27; frequency and it indicates that the calendar item is/&#x27;should be&#x27; repeated on nth occurrence of &#x27;repeatDay&#x27; in the month. Valid values for &#x27;monthPosition&#x27; are integers in the range of -1 and 4 inclusive: -1 for the last occurrence, 1 for the first occurrence, 2 for the second occurrence, and so on. 0 is not used. | [optional] 
**originalStart** | **Date** | The original start date for the calendar item. | [optional] 
**originalEnd** | **Date** | The original end date for the calendar item. | [optional] 
**repeatBroken** | **Boolean** | Calendar item that&#x27;s repeated is part of a recurring series of calendar events but the item has been changed since its original creation. In other words, the calendar item has been modified to no longer align with the recurring series (day/time changed for example) of events. This can only be true if the calendar item is repeatable. | [optional] 
**repeatDay** | **String** | For monthly recurring event, repeat by day of week.   | Type      | Description  | --------- | --------- | | Sunday |  | | Monday |  | | Tuesday |  | | Wednesday |  | | Thursday |  | | Friday |  | | Saturday |  |  | [optional] 
**until** | **Date** | The date the calendar item should be repeated until. Either this &#x27;until&#x27; date OR the count is/&#x27;should be&#x27; set. When creating a calendar item, &#x27;until&#x27; date will be used if both &#x27;until&#x27; date and the count are set. | [optional] 
**weekDays** | [**[BYDAYEnum]**](BYDAYEnum.md) | This property is used in conjunction with the &#x27;Weekly&#x27; frequency and it indicates the days of the week the calendar item should be repeated on. | [optional] 

<a name="FrequencyEnum"></a>
## Enum: FrequencyEnum

* `Monthly` (value: `"Monthly"`)
* `Weekly` (value: `"Weekly"`)
* `Daily` (value: `"Daily"`)


<a name="RepeatDayEnum"></a>
## Enum: RepeatDayEnum

* `Sunday` (value: `"Sunday"`)
* `Monday` (value: `"Monday"`)
* `Tuesday` (value: `"Tuesday"`)
* `Wednesday` (value: `"Wednesday"`)
* `Thursday` (value: `"Thursday"`)
* `Friday` (value: `"Friday"`)
* `Saturday` (value: `"Saturday"`)

