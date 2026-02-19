"use client"

import CustomJodit from '@/components/cui/CustomJodit'
import { EDisclaimerType } from '@/enums/userEnums'

const TermsAndConditions = () => {
  return (
    <div>
      <CustomJodit  type={EDisclaimerType.TERMS}/>
    </div>
  )
}

export default TermsAndConditions