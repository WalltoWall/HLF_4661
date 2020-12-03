import * as React from 'react'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import { useStyles } from 'react-treat'
import { Box, BoxProps } from '@walltowall/calico'
import { AspectRatio } from '@walltowall/siamese'
import VisuallyHidden from '@reach/visually-hidden'
import ReactPlayer, { ReactPlayerProps } from 'react-player'

import { Icon } from '../components/Icon'
import { mockGatsbyImageFluid } from '../lib/mockGatsbyImage'

import * as styleRefs from './VideoPlayer.treat'

const defaultElement = 'div'

type VideoPlayerProps<E extends React.ElementType> = {
  x: number
  y: number
  autoplay?: boolean
  videoURL: string
  videoProps?: ReactPlayerProps
  loop?: boolean
  posterFluid?: FluidObject
  posterAlt?: string
  posterURL?: string
  posterAspectRatio?: number
} & BoxProps<E>

export const VideoPlayer = <
  E extends React.ElementType = typeof defaultElement
>({
  x,
  y,
  autoplay = false,
  videoURL,
  videoProps,
  loop = false,
  posterFluid: rawPosterFluid,
  posterAlt,
  posterURL,
  posterAspectRatio,
  ...props
}: VideoPlayerProps<E>) => {
  const styles = useStyles(styleRefs)
  const posterFluid =
    rawPosterFluid ??
    (posterURL
      ? mockGatsbyImageFluid(posterURL, posterAspectRatio ?? y / x)
      : undefined)

  const [isPlaying, setPlaying] = React.useState(autoplay)
  const play = () => setPlaying(true)
  const stop = () => setPlaying(false)
  const pause = stop

  const [hasStarted, setHasStarted] = React.useState(autoplay)

  const onStart = () => setHasStarted(true)
  const onPlay = play
  const onPause = pause
  const onEnded = () => {
    if (!loop) {
      setHasStarted(false)
      stop()
    }
  }

  return (
    <Box as={defaultElement} {...props}>
      <Box as={AspectRatio} x={x} y={y} styles={{ position: 'relative' }}>
        <Box
          as="button"
          onClick={play}
          className={styles.buttonFocusSensor}
          styles={{ height: 'full', width: 'full' }}
        >
          <Box
            styles={{
              backgroundColor: 'black',
              opacity: hasStarted ? 0 : 100,
              pointerEvents: hasStarted ? 'none' : 'auto',
              transitionDuration: 'normal',
              transitionProperty: 'opacity',
              transitionTimingFunction: 'easeOut',
              position: 'absolute',
              width: 'full',
              height: 'full',
              top: 0,
              left: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <VisuallyHidden>Play video</VisuallyHidden>
            {posterFluid && (
              <Box
                as={GatsbyImage}
                fluid={posterFluid}
                alt={posterAlt}
                styles={{
                  height: 'full',
                  width: 'full',
                  opacity: isPlaying ? 0 : 100,
                  transitionDuration: 'normal',
                  transitionProperty: 'opacity',
                  transitionTimingFunction: 'easeOut',
                }}
              />
            )}
            <Box
              className={styles.buttonFocusTarget}
              styles={{
                opacity: isPlaying ? 0 : 100,
                paddingTop: [4, 5],
                paddingBottom: [4, 5],
                paddingLeft: [10, 12],
                paddingRight: [10, 12],
                position: 'absolute',
                transitionDuration: 'normal',
                transitionProperty: 'backgroundColor',
                transitionTimingFunction: 'easeOut',
              }}
            >
              <Icon
                name="play"
                className={styles.offsetIcon}
                styles={{ color: 'white', width: ['1.25rem', '1.5rem'] }}
              />
            </Box>
          </Box>
          {videoURL && (
            <ReactPlayer
              url={videoURL}
              playing={isPlaying}
              controls={true}
              onStart={onStart}
              onPlay={onPlay}
              onPause={onPause}
              onEnded={onEnded}
              loop={loop}
              width="100%"
              height="100%"
              className="react-player-object-fit-cover"
              {...videoProps}
            />
          )}
        </Box>
      </Box>
    </Box>
  )
}
