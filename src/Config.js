/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Tone from 'Tone/core/Tone'
import Detector from 'three/examples/js/Detector'

export const unitsPerSecond = 7
export const circleHeight = 0
export const radius = 1.1
export const sceneColor = '#faa'
export const tubeColor = '#ffffff'
export const title = 'Inside Music'
export const trackRadius = 2
export const useVoiceOver = true
export const supported = true; //Detector.webgl && Tone.supported
export const trackConfig = [
	{
		artist : 'Greg Thomas',
		track : 'Family',
		folder : 'Family',
		intro : 'Family',
		segments : 6,
		duration : 159,
		// duration : 5,
		trackNames : ['Family_Bass', 'Family_Drums', 'Family_Guitars_and_Banjos', 'Family_Pads_and_Organs', 'Family_Pianos'],
		names : ['Bass', 'Drums', 'Guitars', 'Pads', 'Pianos'],
		soundRings: {
			startColor: '#f7002d',
			endColor: '#00edaa',
			shape: 'triangle',
			size: 8
		},
		floor: {
			color: '#253934' //#263330'
		}
	},
]

export function getTrackData(artist){
	const index = trackConfig.findIndex(t => t.artist === artist)
	return trackConfig[index]
}
