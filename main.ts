RTC_DS1307.DateTime(
2024,
3,
30,
7,
7,
10
)
basic.forever(function () {
    basic.showNumber(RTC_DS1307.getTime(RTC_DS1307.TimeType.YEAR))
    basic.pause(100)
})
