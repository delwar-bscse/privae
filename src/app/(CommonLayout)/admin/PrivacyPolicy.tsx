"use client"

import CustomJodit from '@/components/cui/CustomJodit'
import { EDisclaimerType } from '@/enums/userEnums'

const PrivacyPolicy = () => {
  return (
    <div>
      <CustomJodit type={EDisclaimerType.PRIVACY} />
    </div>
  )
}

export default PrivacyPolicy