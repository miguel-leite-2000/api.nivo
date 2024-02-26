import { Replace } from '@helpers/replace';
import { randomUUID } from 'node:crypto';

export type UserProps = {
  companyId: string;
  avatar?: string | null;
  name: string;
  email: string;
  password: string;
  created_at: Date | string;
  updated_at: Date | string;
};

export class User {
  private _id: string;
  private props: UserProps;
  constructor(
    props: Replace<
      UserProps,
      { created_at?: Date | string; updated_at?: Date | string }
    >,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      created_at: props.created_at ?? new Date(),
      updated_at: props.created_at ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public set avatar(avatar: string | null | undefined) {
    this.props.avatar = avatar;
  }

  public get avatar(): string | null | undefined {
    return this.props.avatar;
  }

  public set companyId(companyId: string) {
    this.props.companyId = companyId;
  }

  public get companyId(): string {
    return this.props.companyId;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public set email(email: string) {
    this.props.email = email;
  }

  public get email(): string {
    return this.props.email;
  }

  public set password(password: string) {
    this.props.password = password;
  }

  public get password(): string {
    return this.props.password;
  }

  public get created_at(): Date | string {
    return this.props.created_at;
  }

  public get updated_at(): Date | string {
    return this.props.created_at;
  }
}
