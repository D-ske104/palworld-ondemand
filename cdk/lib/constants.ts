export const constants = {
  CLUSTER_NAME: 'palworld',
  SERVICE_NAME: 'palworld-server',
  MC_SERVER_CONTAINER_NAME: 'palworld-server',
  WATCHDOG_SERVER_CONTAINER_NAME: 'palworld-ecsfargate-watchdog',
  DOMAIN_STACK_REGION: 'us-east-1',
  ECS_VOLUME_NAME: 'palworld',
  HOSTED_ZONE_SSM_PARAMETER: 'PalworldHostedZoneID',
  LAUNCHER_LAMBDA_ARN_SSM_PARAMETER: 'PalworldLauncherLambdaRoleArn',
  DOCKER_IMAGE: 'thijsvanloef/palworld-server-docker',
}
