export  interface  Card {​​​​​​​​
imgUrl?: string;
missionName?: string;
flightNumber?: number;
missionIds?: string[];
launchYear?: number;
launchSuccess?: boolean;
launchLanding?: string;
}​​​​​​​​
 
export interface Filters {​​​​​​​​
launch_year?: string;
launch_success?: string;
land_success?: string;
}​​​​​​​​
 
export interface SpaceXData {​​​​​​​​
flight_number: number;
mission_name: string;
mission_id?: (string)[];
upcoming: boolean;
launch_year: number;
launch_date_unix: number;
launch_date_utc: string;
launch_date_local: string;
is_tentative: boolean;
tentative_max_precision: string;
tbd: boolean;
launch_window: number;
rocket: Rocket;
ships?: (string)[] | string;
telemetry: Telemetry;
launch_site: LaunchSite;
launch_success: boolean;
launch_failure_details: LaunchFailureDetails;
links: Links;
details: string;
static_fire_date_utc: string;
static_fire_date_unix: number;
timeline: Timeline;
crew?: string;
  }​​​​​​​​
export interface Rocket {​​​​​​​​
rocket_id: string;
rocket_name: string;
rocket_type: string;
first_stage: FirstStage;
second_stage: SecondStage;
fairings: Fairings;
  }​​​​​​​​
export interface FirstStage {​​​​​​​​
cores: CoresEntity[];
  }​​​​​​​​
export interface CoresEntity {​​​​​​​​
core_serial: string;
flight: number;
block?: string;
gridfins: boolean;
legs: boolean;
reused: boolean;
land_success?: string;
landing_intent: boolean;
landing_type?: string;
landing_vehicle?: string;
  }​​​​​​​​
export interface SecondStage {​​​​​​​​
block: number;
payloads?: PayloadsEntity[];
  }​​​​​​​​
export interface PayloadsEntity {​​​​​​​​
payload_id: string;
norad_id?: (string)[] | string;
reused: boolean;
customers?: (string)[] | string;
nationality: string;
manufacturer: string;
payload_type: string;
payload_mass_kg: number;
payload_mass_lbs: number;
orbit: string;
orbit_params: OrbitParams;
  }​​​​​​​​
export interface OrbitParams {​​​​​​​​
reference_system: string;
regime: string;
longitude?: string;
semi_major_axis_km?: string;
eccentricity?: string;
periapsis_km: number;
apoapsis_km: number;
inclination_deg: number;
period_min?: string;
lifespan_years?: string;
epoch?: string;
mean_motion?: string;
raan?: string;
arg_of_pericenter?: string;
mean_anomaly?: string;
  }​​​​​​​​
export interface Fairings {​​​​​​​​
reused: boolean;
recovery_attempt: boolean;
recovered: boolean;
ship?: string;
  }​​​​​​​​
export interface Telemetry {​​​​​​​​
flight_club?: string;
  }​​​​​​​​
export interface LaunchSite {​​​​​​​​
site_id: string;
site_name: string;
site_name_long: string;
  }​​​​​​​​
export interface LaunchFailureDetails {​​​​​​​​
time: number;
altitude?: string;
reason: string;
  }​​​​​​​​
export interface Links {​​​​​​​​
mission_patch: string;
mission_patch_small: string;
reddit_campaign?: string;
reddit_launch?: string;
reddit_recovery?: string;
reddit_media?: string;
presskit?: string;
article_link: string;
wikipedia: string;
video_link: string;
youtube_id: string;
flickr_images?: (string)[] | string;
  }​​​​​​​​
export interface Timeline {​​​​​​​​
webcast_liftoff: number;
  }​​​​​​​​
​





