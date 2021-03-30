/* ================
 * Github Utils
 * ================ */

/**
 * Remove the event prefix from the repository reference
 * @param envVar
 */
export function removeGithubRef(envVar: string): string {
  return envVar?.replace(RegExp('^refs/(heads|tags|pull)/'), '') ?? ''
}
