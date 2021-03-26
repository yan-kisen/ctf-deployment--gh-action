/**
 * Contentful Deploy Github Composite Action
 *
 * References:
 *  - https://github.com/actions/toolkit
 *  - https://github.com/actions/toolkit/blob/main/docs/commands.md
 *
 *  @author Yan Kisen
 *
 *  @since 03/25/2021
 */
import * as core from '@actions/core'
import * as github from '@actions/github'
import {Context} from '@actions/github/lib/context'

// eslint-disable-next-line @typescript-eslint/no-var-requires


const ghContextData: Context = github.context

async function run(): Promise<void> {
  try {
    //
    // ## (0) Checkout repository @ reference
    //
    // ## (1) Setup Node (12)
    //
    // ## (2) Run `npm ci`
    //

    core.startGroup('deployment-action')

    // eslint-disable-next-line no-console
    console.log(`stringify: ${JSON.stringify(ghContextData)}`)
    // eslint-disable-next-line no-console
    console.log(`ref: ${ghContextData.ref}`)

    core.endGroup()
    //
    // ## (3) Normalize the reference (ex: `refs/heads/test` ==> `test` )
    //
    //
    // ## (4) Run Nuxt Build & Generate
    //    (4.a) Check GH cache for `.nuxt/` output (IF unchanged, skip Build)
    //    (4.b) Dynamically write to `nuxt.config.ts` ?
    //
    // ## (5) Regardless of success/failure, upload `ghContext.json` & `syncCollection.json` to as GH Artifacts
    //
    // ## (6) If `master`, do Sentry Release
    //
    // ## (7) Prepare `s3_website.yml`
    //
    // ## (8) Zip & Upload `build/` to Backups Bucket
    //
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
