import React from 'react'
import { useUserActivityState } from 'amazon-chime-sdk-component-library-react'

import { cn } from '@/lib/utils'
import { AudioInputVFControl } from './audio-input-vf-control'
import { EndMeetingControl } from './end-meeting-control'
import { VideoInputTransformControl } from './video-input-transform-control'
import { AudioOutputControl } from './audio-output-control'

function MeetingControls() {
  const { isUserActive } = useUserActivityState()

  return (
    <div
      className={cn(
        'absolute bottom-0 z-50 transition',
        !isUserActive && 'opacity-0',
      )}
    >
      <div className="flex items-center justify-center gap-4 rounded-full bg-background/10 p-2 shadow">
        <AudioInputVFControl />
        <VideoInputTransformControl />
        <AudioOutputControl />
        <EndMeetingControl />
      </div>
    </div>
  )
}

export { MeetingControls }
