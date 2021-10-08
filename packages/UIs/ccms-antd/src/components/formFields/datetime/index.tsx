import * as React from 'react'
import { DatetimeField } from 'ccms'
import { DatePicker, ConfigProvider } from 'antd'
import { IDatetimeField, DatetimeFieldConfig } from 'ccms/dist/src/components/formFields/datetime'
import moment from 'moment'
import locale from 'antd/lib/locale/zh_CN';
import 'antd/lib/date-picker/style/index.css'
export const PropsType = (props: DatetimeFieldConfig) => { }

export default class DatetimeFieldComponent extends DatetimeField {
  renderComponent = (props: IDatetimeField) => {
    const {
      value,
      mode,
      placeholder,
      onChange,
      showTime
    } = props
    return (
      <ConfigProvider locale={locale}>
        <DatePicker
          {...props}
          value={value ? moment(value) : null}
          picker={mode || 'date'}
          showTime={showTime}
          placeholder={placeholder || '选择时间'}
          onChange={async (time) => {
            const rs = time === null ? '' : moment(time).format()
            await onChange(rs)
          }}
        />
      </ConfigProvider>
    )
  }
}
