# LearnApIs.Locale1

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The locale specified by the user.  This locale will be used anywhere the user is allowed to customize their locale; courses may force a specific locale, overriding the user&#x27;s locale preference. | [optional] 
**calendar** | **String** | The calendar type specified by the user.   | Type      | Description  | --------- | --------- | | Gregorian | Gregorian | | GregorianHijri | Gregorian &amp; Hijri | | Hijri | Hijri | | HijriGregorian | Hijri &amp; Gregorian |  | [optional] 
**firstDayOfWeek** | **String** | The user&#x27;s preferred first day of the week.   | Type      | Description  | --------- | --------- | | Sunday | Sunday | | Monday | Monday | | Saturday | Saturday |  | [optional] 

<a name="CalendarEnum"></a>
## Enum: CalendarEnum

* `Gregorian` (value: `"Gregorian"`)
* `GregorianHijri` (value: `"GregorianHijri"`)
* `Hijri` (value: `"Hijri"`)
* `HijriGregorian` (value: `"HijriGregorian"`)


<a name="FirstDayOfWeekEnum"></a>
## Enum: FirstDayOfWeekEnum

* `Sunday` (value: `"Sunday"`)
* `Monday` (value: `"Monday"`)
* `Saturday` (value: `"Saturday"`)

