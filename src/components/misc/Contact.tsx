import React from 'react'
import { MAILCHIMP_SUBSCRIBE_ROUTE } from '../../constants/routes'
import { ThinContainer, BtnInput, Input, H2, Card, P } from '../../shared'
import { M0 } from '../../constants/measurements'

const FORMSPREE_API = 'https://formspree.io/xnqvpvdq'

interface IMailchimpState {
  NAME: string
  EMAIL: string
  MESSAGE: string
}

export class Contact extends React.Component<{}, IMailchimpState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      NAME: '',
      EMAIL: '',
      MESSAGE: '',
    }
  }

  private isDisabled() {
    const { EMAIL } = this.state
    return !EMAIL
  }

  private handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    const { name, value } = event.target
    const updates = {
      [name]: value,
    } as Pick<IMailchimpState, 'FNAME' | 'LNAME' | 'EMAIL'>
    this.setState(updates)
  }

  public render() {
    const { NAME, EMAIL, MESSAGE } = this.state
    const isDisabled = this.isDisabled()
    return (
      <ThinContainer>
        <Card bordered shaded>
          <H2 mb2>Let's stay in touch</H2>
          <P>Contact The MBA Fund team</P>
          <form
            id={FORMSPREE_API}
            action={FORMSPREE_API}
            method="post"
            noValidate
            style={{ marginBottom: M0 }}
            target="_blank"
          >
            <div>
              <Input
                label="Name"
                value={NAME}
                type="text"
                name="NAME"
                id="NAME"
                required
                onChange={e =>
                  this.handleChange(e as React.ChangeEvent<HTMLInputElement>)
                }
              />
            </div>
            <div>
              <Input
                label="Email address"
                value={EMAIL}
                type="email"
                name="EMAIL"
                id="email"
                required={true}
                onChange={e =>
                  this.handleChange(e as React.ChangeEvent<HTMLInputElement>)
                }
              />
            </div>
            <div>
              <Input
                isTextarea
                label="Message"
                value={MESSAGE}
                name="MESSAGE"
                id="message"
                required={true}
                onChange={e =>
                  this.handleChange(e as React.ChangeEvent<HTMLInputElement>)
                }
              />
            </div>
            <BtnInput
              fullWidth
              marginBottom={M0}
              disabled={isDisabled}
              type="submit"
              value="Submit"
              name="subscribe"
            />
          </form>
        </Card>
      </ThinContainer>
    )
  }
}
