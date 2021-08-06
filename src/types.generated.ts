export type Maybe<T> = T | undefined
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: unknown
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: unknown
}

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>
  ne?: Maybe<Scalars['Boolean']>
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>
}

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>
  ne?: Maybe<Scalars['Date']>
  gt?: Maybe<Scalars['Date']>
  gte?: Maybe<Scalars['Date']>
  lt?: Maybe<Scalars['Date']>
  lte?: Maybe<Scalars['Date']>
  in?: Maybe<Array<Maybe<Scalars['Date']>>>
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>
}

export type Directory = Node & {
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryConnection = {
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<DirectoryGroupConnection>
}

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
  next?: Maybe<Directory>
  node: Directory
  previous?: Maybe<Directory>
}

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type File = Node & {
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileConnection = {
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<FileGroupConnection>
}

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileConnectionMaxArgs = {
  field: FileFieldsEnum
}

export type FileConnectionMinArgs = {
  field: FileFieldsEnum
}

export type FileConnectionSumArgs = {
  field: FileFieldsEnum
}

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: FileFieldsEnum
}

export type FileEdge = {
  next?: Maybe<File>
  node: File
  previous?: Maybe<File>
}

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type FileGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>
  ne?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Maybe<Scalars['Float']>>>
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>
}

export enum GatsbyImageLayout {
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH',
  Constrained = 'CONSTRAINED',
}

export type IdQueryOperatorInput = {
  eq?: Maybe<Scalars['ID']>
  ne?: Maybe<Scalars['ID']>
  in?: Maybe<Array<Maybe<Scalars['ID']>>>
  nin?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export type ImgixFixed = {
  base64: Scalars['String']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp: Scalars['String']
  srcSetWebp: Scalars['String']
  sizes: Scalars['String']
  width: Scalars['Int']
  height: Scalars['Int']
}

export type ImgixFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
}

export type ImgixFluid = {
  base64: Scalars['String']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp: Scalars['String']
  srcSetWebp: Scalars['String']
  sizes: Scalars['String']
  aspectRatio: Scalars['Float']
}

export type ImgixFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
}

export type ImgixParamsInput = {
  /** Specifies an aspect ratio to maintain when resizing and cropping the image. [See docs](https://docs.imgix.com/apis/url/size/ar). */
  ar?: Maybe<Scalars['String']>
  /** Applies automatic enhancements to images. [See docs](https://docs.imgix.com/apis/url/auto). */
  auto?: Maybe<Scalars['String']>
  /** Colors the background of padded and partially-transparent images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/bg). */
  bg?: Maybe<Scalars['String']>
  /** Changes the blend alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/blending/blend-align). */
  blendAlign?: Maybe<Scalars['String']>
  /** Alias for `blendAlign`. */
  blendalign?: Maybe<Scalars['String']>
  /** Alias for `blendAlign`. */
  ba?: Maybe<Scalars['String']>
  /** Changes the alpha of the blend image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/blending/blend-alpha). */
  blendAlpha?: Maybe<Scalars['Int']>
  /** Alias for `blendAlpha`. */
  blendalpha?: Maybe<Scalars['Int']>
  /** Alias for `blendAlpha`. */
  balph?: Maybe<Scalars['Int']>
  /** Specifies a color to use when applying the blend. [See docs](https://docs.imgix.com/apis/url/blending/blend-color). */
  blendColor?: Maybe<Scalars['String']>
  /** Alias for `blendColor`. */
  blendcolor?: Maybe<Scalars['String']>
  /** Alias for `blendColor`. */
  blendClr?: Maybe<Scalars['String']>
  /** Alias for `blendColor`. */
  blendclr?: Maybe<Scalars['String']>
  /** Specifies the type of crop for blend images. [See docs](https://docs.imgix.com/apis/url/blending/blend-crop). */
  blendCrop?: Maybe<Scalars['String']>
  /** Alias for `blendCrop`. */
  blendcrop?: Maybe<Scalars['String']>
  /** Alias for `blendCrop`. */
  bc?: Maybe<Scalars['String']>
  /** Specifies the fit mode for blend images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/blending/blend-fit). */
  blendFit?: Maybe<Scalars['String']>
  /** Alias for `blendFit`. */
  blendfit?: Maybe<Scalars['String']>
  /** Alias for `blendFit`. */
  bf?: Maybe<Scalars['String']>
  /** Adjusts the height of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-h). */
  blendH?: Maybe<Scalars['Float']>
  /** Alias for `blendH`. */
  blendh?: Maybe<Scalars['Float']>
  /** Alias for `blendH`. */
  bh?: Maybe<Scalars['Float']>
  /** Sets the blend mode for a blend image. Default: `overlay`. [See docs](https://docs.imgix.com/apis/url/blending/blend-mode). */
  blendMode?: Maybe<Scalars['String']>
  /** Alias for `blendMode`. */
  blendmode?: Maybe<Scalars['String']>
  /** Alias for `blendMode`. */
  bm?: Maybe<Scalars['String']>
  /** Applies padding to the blend image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-pad). */
  blendPad?: Maybe<Scalars['Int']>
  /** Alias for `blendPad`. */
  blendpad?: Maybe<Scalars['Int']>
  /** Alias for `blendPad`. */
  bp?: Maybe<Scalars['Int']>
  /** Adjusts the size of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-size). */
  blendSize?: Maybe<Scalars['String']>
  /** Alias for `blendSize`. */
  blendsize?: Maybe<Scalars['String']>
  /** Alias for `blendSize`. */
  bs?: Maybe<Scalars['String']>
  /** Adjusts the width of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-w). */
  blendW?: Maybe<Scalars['Float']>
  /** Alias for `blendW`. */
  blendw?: Maybe<Scalars['Float']>
  /** Alias for `blendW`. */
  bw?: Maybe<Scalars['Float']>
  /** Adjusts the x-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-x). */
  blendX?: Maybe<Scalars['Int']>
  /** Alias for `blendX`. */
  blendx?: Maybe<Scalars['Int']>
  /** Alias for `blendX`. */
  bx?: Maybe<Scalars['Int']>
  /** Adjusts the y-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-y). */
  blendY?: Maybe<Scalars['Int']>
  /** Alias for `blendY`. */
  blendy?: Maybe<Scalars['Int']>
  /** Alias for `blendY`. */
  by?: Maybe<Scalars['Int']>
  /** Specifies the location of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend). */
  blend?: Maybe<Scalars['String']>
  /** Alias for `blend`. */
  b?: Maybe<Scalars['String']>
  /** Applies a gaussian blur to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/blur). */
  blur?: Maybe<Scalars['Int']>
  /** Sets bottom border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-bottom). */
  borderBottom?: Maybe<Scalars['Int']>
  /** Sets left border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-left). */
  borderLeft?: Maybe<Scalars['Int']>
  /** Sets the inner radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner). */
  borderRadiusInner?: Maybe<Scalars['String']>
  /** Sets the outer radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius). */
  borderRadius?: Maybe<Scalars['String']>
  /** Sets right border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-right). */
  borderRight?: Maybe<Scalars['Int']>
  /** Sets top border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-top). */
  borderTop?: Maybe<Scalars['Int']>
  /** Applies a border to an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border). */
  border?: Maybe<Scalars['String']>
  /** Adjusts the brightness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/bri). */
  bri?: Maybe<Scalars['Int']>
  /** Sets one or more Client-Hints headers. [See docs](https://docs.imgix.com/apis/url/format/ch). */
  ch?: Maybe<Scalars['String']>
  /** Specifies the output chroma subsampling rate. Default: `420`. [See docs](https://docs.imgix.com/apis/url/format/chromasub). */
  chromasub?: Maybe<Scalars['Int']>
  /** Limits the number of unique colors in an image. [See docs](https://docs.imgix.com/apis/url/format/colorquant). */
  colorquant?: Maybe<Scalars['Int']>
  /** Specifies how many colors to include in a palette-extraction response. Default: `6`. [See docs](https://docs.imgix.com/apis/url/color-palette/colors). */
  colors?: Maybe<Scalars['Int']>
  /** Adjusts the contrast of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/con). */
  con?: Maybe<Scalars['Int']>
  /** Specifies the radius value for a rounded corner mask. [See docs](https://docs.imgix.com/apis/url/mask/corner-radius). */
  cornerRadius?: Maybe<Scalars['String']>
  /** Specifies how to crop an image. [See docs](https://docs.imgix.com/apis/url/size/crop). */
  crop?: Maybe<Scalars['String']>
  /** Specifies the color space of the output image. [See docs](https://docs.imgix.com/apis/url/format/cs). */
  cs?: Maybe<Scalars['String']>
  /** Forces a URL to use send-file in its response. [See docs](https://docs.imgix.com/apis/url/format/dl). */
  dl?: Maybe<Scalars['String']>
  /** Sets the DPI value in the EXIF header. [See docs](https://docs.imgix.com/apis/url/format/dpi). */
  dpi?: Maybe<Scalars['Int']>
  /** Adjusts the device-pixel ratio of the output image. Default: `1`. [See docs](https://docs.imgix.com/apis/url/dpr). */
  dpr?: Maybe<Scalars['Float']>
  /** Changes the alpha of the duotone effect atop the source image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/stylize/duotone-alpha). */
  duotoneAlpha?: Maybe<Scalars['Int']>
  /** Applies a duotone effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/duotone). */
  duotone?: Maybe<Scalars['String']>
  /** Adjusts the exposure of the output image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/exp). */
  exp?: Maybe<Scalars['Int']>
  /** A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code. [See docs](https://docs.imgix.com/apis/url/expires). */
  expires?: Maybe<Scalars['String']>
  /** Selects a face to crop to. [See docs](https://docs.imgix.com/apis/url/face-detection/faceindex). */
  faceindex?: Maybe<Scalars['Int']>
  /** Adjusts padding around a selected face. Default: `1`. [See docs](https://docs.imgix.com/apis/url/face-detection/facepad). */
  facepad?: Maybe<Scalars['Float']>
  /** Specifies that face data should be included in output when combined with `fm=json`. [See docs](https://docs.imgix.com/apis/url/face-detection/faces). */
  faces?: Maybe<Scalars['Int']>
  /** Sets the fill color for images with additional space created by the fit setting. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/fill/fill-color). */
  fillColor?: Maybe<Scalars['String']>
  /** Alias for `fillColor`. */
  fillcolor?: Maybe<Scalars['String']>
  /** Determines how to fill in additional space created by the fit setting. [See docs](https://docs.imgix.com/apis/url/fill/fill). */
  fill?: Maybe<Scalars['String']>
  /** Specifies how to map the source image to the output image dimensions. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/size/fit). */
  fit?: Maybe<Scalars['String']>
  /** Alias for `fit`. */
  f?: Maybe<Scalars['String']>
  /** Flips an image on a specified axis. [See docs](https://docs.imgix.com/apis/url/rotation/flip). */
  flip?: Maybe<Scalars['String']>
  /** Changes the format of the output image. [See docs](https://docs.imgix.com/apis/url/format/fm). */
  fm?: Maybe<Scalars['String']>
  /** Displays crosshairs identifying the location of the set focal point. Default: `false`. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug). */
  fpDebug?: Maybe<Scalars['Boolean']>
  /** Sets the relative horizontal value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x). */
  fpX?: Maybe<Scalars['Float']>
  /** Sets the relative vertical value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y). */
  fpY?: Maybe<Scalars['Float']>
  /** Sets the relative zoom value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z). */
  fpZ?: Maybe<Scalars['Float']>
  /** Adjusts the gamma of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/gam). */
  gam?: Maybe<Scalars['Int']>
  /** Sets grid colors for the transparency checkerboard grid. */
  gridColors?: Maybe<Scalars['String']>
  /** Sets grid size for the transparency checkerboard grid. */
  gridSize?: Maybe<Scalars['Int']>
  /** Adjusts the height of the output image. [See docs](https://docs.imgix.com/apis/url/size/h). */
  h?: Maybe<Scalars['Float']>
  /** Alias for `h`. */
  height?: Maybe<Scalars['Float']>
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/high). */
  high?: Maybe<Scalars['Int']>
  /** Applies a half-tone effect to the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/htn). */
  htn?: Maybe<Scalars['Int']>
  /** Adjusts the hue of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/hue). */
  hue?: Maybe<Scalars['Int']>
  /** Inverts the colors on the source image. Default: `false`. [See docs](https://docs.imgix.com/apis/url/adjustment/invert). */
  invert?: Maybe<Scalars['Boolean']>
  /** Alias for `invert`. */
  inv?: Maybe<Scalars['Boolean']>
  /** Specifies that the output image should be a lossless variant. Default: `false`. [See docs](https://docs.imgix.com/apis/url/format/lossless). */
  lossless?: Maybe<Scalars['Boolean']>
  /** Changes the watermark alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-align). */
  markAlign?: Maybe<Scalars['String']>
  /** Alias for `markAlign`. */
  ma?: Maybe<Scalars['String']>
  /** Alias for `markAlign`. */
  markalign?: Maybe<Scalars['String']>
  /** Changes the alpha of the watermark image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-alpha). */
  markAlpha?: Maybe<Scalars['Int']>
  /** Alias for `markAlpha`. */
  markalpha?: Maybe<Scalars['Int']>
  /** Alias for `markAlpha`. */
  malph?: Maybe<Scalars['Int']>
  /** Changes base URL of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-base). */
  markBase?: Maybe<Scalars['String']>
  /** Alias for `markBase`. */
  mb?: Maybe<Scalars['String']>
  /** Alias for `markBase`. */
  markbase?: Maybe<Scalars['String']>
  /** Specifies the fit mode for watermark images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-fit). */
  markFit?: Maybe<Scalars['String']>
  /** Alias for `markFit`. */
  mf?: Maybe<Scalars['String']>
  /** Alias for `markFit`. */
  markfit?: Maybe<Scalars['String']>
  /** Adjusts the height of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-h). */
  markH?: Maybe<Scalars['Float']>
  /** Alias for `markH`. */
  mh?: Maybe<Scalars['Float']>
  /** Alias for `markH`. */
  markh?: Maybe<Scalars['Float']>
  /** Applies padding to the watermark image. Default: `5`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-pad). */
  markPad?: Maybe<Scalars['Int']>
  /** Alias for `markPad`. */
  mp?: Maybe<Scalars['Int']>
  /** Alias for `markPad`. */
  markpad?: Maybe<Scalars['Int']>
  /** Rotates a watermark or tiled watermarks by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-rot). */
  markRot?: Maybe<Scalars['Float']>
  /** Adjusts the scale of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-scale). */
  markScale?: Maybe<Scalars['Int']>
  /** Alias for `markScale`. */
  ms?: Maybe<Scalars['Int']>
  /** Alias for `markScale`. */
  markscale?: Maybe<Scalars['Int']>
  /** Adds tiled watermark. [See docs](https://docs.imgix.com/apis/url/watermark/mark-tile). */
  markTile?: Maybe<Scalars['String']>
  /** Alias for `markTile`. */
  mtile?: Maybe<Scalars['String']>
  /** Alias for `markTile`. */
  marktile?: Maybe<Scalars['String']>
  /** Adjusts the width of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-w). */
  markW?: Maybe<Scalars['Float']>
  /** Alias for `markW`. */
  mw?: Maybe<Scalars['Float']>
  /** Alias for `markW`. */
  markw?: Maybe<Scalars['Float']>
  /** Adjusts the x-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-x). */
  markX?: Maybe<Scalars['Int']>
  /** Alias for `markX`. */
  mx?: Maybe<Scalars['Int']>
  /** Alias for `markX`. */
  markx?: Maybe<Scalars['Int']>
  /** Adjusts the y-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-y). */
  markY?: Maybe<Scalars['Int']>
  /** Alias for `markY`. */
  my?: Maybe<Scalars['Int']>
  /** Alias for `markY`. */
  marky?: Maybe<Scalars['Int']>
  /** Specifies the location of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark). */
  mark?: Maybe<Scalars['String']>
  /** Alias for `mark`. */
  m?: Maybe<Scalars['String']>
  /** Colors the background of the transparent mask area of images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/mask/mask-bg). */
  maskBg?: Maybe<Scalars['String']>
  /** Alias for `maskBg`. */
  maskbg?: Maybe<Scalars['String']>
  /** Defines the type of mask and specifies the URL if that type is selected. [See docs](https://docs.imgix.com/apis/url/mask). */
  mask?: Maybe<Scalars['String']>
  /** Specifies the maximum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-height). */
  maxH?: Maybe<Scalars['Int']>
  /** Alias for `maxH`. */
  maxHeight?: Maybe<Scalars['Int']>
  /** Specifies the maximum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-width). */
  maxW?: Maybe<Scalars['Int']>
  /** Alias for `maxW`. */
  maxWidth?: Maybe<Scalars['Int']>
  /** Specifies the minimum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-height). */
  minH?: Maybe<Scalars['Int']>
  /** Alias for `minH`. */
  minHeight?: Maybe<Scalars['Int']>
  /** Specifies the minimum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-width). */
  minW?: Maybe<Scalars['Int']>
  /** Alias for `minW`. */
  minWidth?: Maybe<Scalars['Int']>
  /** Applies a monochrome effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/monochrome). */
  monochrome?: Maybe<Scalars['String']>
  /** Alias for `monochrome`. */
  mono?: Maybe<Scalars['String']>
  /** Reduces the noise in an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nr). */
  nr?: Maybe<Scalars['Int']>
  /** Provides a threshold by which to sharpen an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nrs). */
  nrs?: Maybe<Scalars['Int']>
  /** Changes the image orientation. [See docs](https://docs.imgix.com/apis/url/rotation/orient). */
  orient?: Maybe<Scalars['Int']>
  /** Alias for `orient`. */
  or?: Maybe<Scalars['Int']>
  /** Sets bottom padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom). */
  padBottom?: Maybe<Scalars['Int']>
  /** Sets left padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-left). */
  padLeft?: Maybe<Scalars['Int']>
  /** Sets right padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-right). */
  padRight?: Maybe<Scalars['Int']>
  /** Sets top padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-top). */
  padTop?: Maybe<Scalars['Int']>
  /** Pads an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad). */
  pad?: Maybe<Scalars['Int']>
  /** Selects a page from a PDF for display. Default: `1`. [See docs](https://docs.imgix.com/apis/url/pdf/page). */
  page?: Maybe<Scalars['Int']>
  /** Specifies an output format for palette-extraction. [See docs](https://docs.imgix.com/apis/url/color-palette/palette). */
  palette?: Maybe<Scalars['String']>
  /** Enables or disables PDF annotation. Default: `true`. [See docs](https://docs.imgix.com/apis/url/pdf/pdf-annotation). */
  pdfAnnotation?: Maybe<Scalars['Boolean']>
  /** Alias for `pdfAnnotation`. */
  annotation?: Maybe<Scalars['Boolean']>
  /** Specifies a CSS prefix for all classes in palette-extraction. Default: `image`. [See docs](https://docs.imgix.com/apis/url/color-palette/prefix). */
  prefix?: Maybe<Scalars['String']>
  /** Applies a pixelation effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/px). */
  px?: Maybe<Scalars['Int']>
  /** Adjusts the quality of an output image. Default: `75`. [See docs](https://docs.imgix.com/apis/url/format/q). */
  q?: Maybe<Scalars['Int']>
  /** Crops an image to a specified rectangle. [See docs](https://docs.imgix.com/apis/url/size/rect). */
  rect?: Maybe<Scalars['String']>
  /** Rotates an image by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/rotation/rot). */
  rot?: Maybe<Scalars['Float']>
  /** Adjusts the saturation of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sat). */
  sat?: Maybe<Scalars['Int']>
  /** Applies a sepia effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/sepia). */
  sepia?: Maybe<Scalars['Int']>
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/shad). */
  shad?: Maybe<Scalars['Float']>
  /** Adjusts the sharpness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sharp). */
  sharp?: Maybe<Scalars['Float']>
  /** Adds checkerboard behind images which support transparency. [See docs](https://docs.imgix.com/apis/url/fill/transparency). */
  transparency?: Maybe<Scalars['String']>
  /** Specifies a trim color on a trim operation. [See docs](https://docs.imgix.com/apis/url/trim/trim-color). */
  trimColor?: Maybe<Scalars['String']>
  /** Alias for `trimColor`. */
  trimcolor?: Maybe<Scalars['String']>
  /** Specifies the mean difference on a trim operation. Default: `11`. [See docs](https://docs.imgix.com/apis/url/trim/trim-md). */
  trimMd?: Maybe<Scalars['Float']>
  /** Alias for `trimMd`. */
  trimmd?: Maybe<Scalars['Float']>
  /** Pads the area of the source image before trimming. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-pad). */
  trimPad?: Maybe<Scalars['Int']>
  /** Alias for `trimPad`. */
  trimpad?: Maybe<Scalars['Int']>
  /** Specifies the standard deviation on a trim operation. Default: `10`. [See docs](https://docs.imgix.com/apis/url/trim/trim-sd). */
  trimSd?: Maybe<Scalars['Float']>
  /** Alias for `trimSd`. */
  trimsd?: Maybe<Scalars['Float']>
  /** Specifies the tolerance on a trim operation. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-tol). */
  trimTol?: Maybe<Scalars['Float']>
  /** Alias for `trimTol`. */
  trimtol?: Maybe<Scalars['Float']>
  /** Trims the source image. [See docs](https://docs.imgix.com/apis/url/trim/trim). */
  trim?: Maybe<Scalars['String']>
  /** Sets the vertical and horizontal alignment of rendered text relative to the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-align). */
  txtAlign?: Maybe<Scalars['String']>
  /** Alias for `txtAlign`. */
  txtalign?: Maybe<Scalars['String']>
  /** Alias for `txtAlign`. */
  ta?: Maybe<Scalars['String']>
  /** Sets the clipping properties of rendered text. Default: `end`. [See docs](https://docs.imgix.com/apis/url/text/txt-clip). */
  txtClip?: Maybe<Scalars['String']>
  /** Alias for `txtClip`. */
  txtclip?: Maybe<Scalars['String']>
  /** Alias for `txtClip`. */
  tcl?: Maybe<Scalars['String']>
  /** Specifies the color of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-color). */
  txtColor?: Maybe<Scalars['String']>
  /** Alias for `txtColor`. */
  txtcolor?: Maybe<Scalars['String']>
  /** Alias for `txtColor`. */
  txtClr?: Maybe<Scalars['String']>
  /** Alias for `txtColor`. */
  txtclr?: Maybe<Scalars['String']>
  /** Alias for `txtColor`. */
  tc?: Maybe<Scalars['String']>
  /** Specifies the fit approach for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-fit). */
  txtFit?: Maybe<Scalars['String']>
  /** Alias for `txtFit`. */
  txtfit?: Maybe<Scalars['String']>
  /** Selects a font for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-font). */
  txtFont?: Maybe<Scalars['String']>
  /** Alias for `txtFont`. */
  tf?: Maybe<Scalars['String']>
  /** Alias for `txtFont`. */
  txtfont?: Maybe<Scalars['String']>
  /** Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-lead). */
  txtLead?: Maybe<Scalars['Int']>
  /** Alias for `txtLead`. */
  txtlead?: Maybe<Scalars['Int']>
  /** Controls the level of ligature substitution. [See docs](https://docs.imgix.com/apis/url/text/txt-lig). */
  txtLig?: Maybe<Scalars['Int']>
  /** Alias for `txtLig`. */
  txtlig?: Maybe<Scalars['Int']>
  /** Specifies a text outline color. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/text/txt-line-color). */
  txtLineColor?: Maybe<Scalars['String']>
  /** Alias for `txtLineColor`. */
  txtlinecolor?: Maybe<Scalars['String']>
  /** Alias for `txtLineColor`. */
  txtLineClr?: Maybe<Scalars['String']>
  /** Alias for `txtLineColor`. */
  txtlineclr?: Maybe<Scalars['String']>
  /** Outlines the rendered text with a specified color. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-line). */
  txtLine?: Maybe<Scalars['Int']>
  /** Alias for `txtLine`. */
  txtline?: Maybe<Scalars['Int']>
  /** Alias for `txtLine`. */
  tl?: Maybe<Scalars['Int']>
  /** Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-pad). */
  txtPad?: Maybe<Scalars['Int']>
  /** Alias for `txtPad`. */
  txtpad?: Maybe<Scalars['Int']>
  /** Alias for `txtPad`. */
  tp?: Maybe<Scalars['Int']>
  /** Applies a shadow to rendered text. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-shad). */
  txtShad?: Maybe<Scalars['Float']>
  /** Alias for `txtShad`. */
  txtshad?: Maybe<Scalars['Float']>
  /** Alias for `txtShad`. */
  tsh?: Maybe<Scalars['Float']>
  /** Sets the font size of rendered text. Default: `12`. [See docs](https://docs.imgix.com/apis/url/text/txt-size). */
  txtSize?: Maybe<Scalars['Int']>
  /** Alias for `txtSize`. */
  tsz?: Maybe<Scalars['Int']>
  /** Alias for `txtSize`. */
  txtsize?: Maybe<Scalars['Int']>
  /** Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-track). */
  txtTrack?: Maybe<Scalars['Int']>
  /** Alias for `txtTrack`. */
  txttrack?: Maybe<Scalars['Int']>
  /** Alias for `txtTrack`. */
  tt?: Maybe<Scalars['Int']>
  /** Sets the width of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-width). */
  txtWidth?: Maybe<Scalars['Int']>
  /** Alias for `txtWidth`. */
  txtwidth?: Maybe<Scalars['Int']>
  /** Sets the text string to render. [See docs](https://docs.imgix.com/apis/url/text/txt). */
  txt?: Maybe<Scalars['String']>
  /** Alias for `txt`. */
  t?: Maybe<Scalars['String']>
  /** Sharpens the source image using an unsharp mask. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/usm). */
  usm?: Maybe<Scalars['Int']>
  /** Specifies the radius for an unsharp mask operation. Default: `2.5`. [See docs](https://docs.imgix.com/apis/url/adjustment/usmrad). */
  usmrad?: Maybe<Scalars['Float']>
  /** Adjusts the vibrance of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/vib). */
  vib?: Maybe<Scalars['Int']>
  /** Adjusts the width of the output image. [See docs](https://docs.imgix.com/apis/url/size/w). */
  w?: Maybe<Scalars['Float']>
  /** Alias for `w`. */
  width?: Maybe<Scalars['Float']>
}

export enum ImgixPlaceholder {
  DominantColor = 'DOMINANT_COLOR',
  Blurred = 'BLURRED',
  None = 'NONE',
}

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>
  ne?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Maybe<Scalars['Int']>>>
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type Internal = {
  content?: Maybe<Scalars['String']>
  contentDigest: Scalars['String']
  description?: Maybe<Scalars['String']>
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>
  ignoreType?: Maybe<Scalars['Boolean']>
  mediaType?: Maybe<Scalars['String']>
  owner: Scalars['String']
  type: Scalars['String']
}

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>
  contentDigest?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  fieldOwners?: Maybe<StringQueryOperatorInput>
  ignoreType?: Maybe<BooleanQueryOperatorInput>
  mediaType?: Maybe<StringQueryOperatorInput>
  owner?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
}

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>
  ne?: Maybe<Scalars['JSON']>
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>
  regex?: Maybe<Scalars['JSON']>
  glob?: Maybe<Scalars['JSON']>
}

export type LocalSearchAllContent = Node & {
  /** The name of the index. */
  name: Scalars['String']
  /** The search engine used to create the index. */
  engine: Scalars['String']
  /** The search index created using the selected engine. */
  index: Scalars['String']
  /** A JSON object used to map search results to their data. */
  store: Scalars['JSON']
  /** Save the index to the site's static directory and return a public URL to it. */
  publicIndexURL: Scalars['String']
  /** Save the store to the site's static directory and return a public URL to it. */
  publicStoreURL: Scalars['String']
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type LocalSearchAllContentConnection = {
  totalCount: Scalars['Int']
  edges: Array<LocalSearchAllContentEdge>
  nodes: Array<LocalSearchAllContent>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<LocalSearchAllContentGroupConnection>
}

export type LocalSearchAllContentConnectionDistinctArgs = {
  field: LocalSearchAllContentFieldsEnum
}

export type LocalSearchAllContentConnectionMaxArgs = {
  field: LocalSearchAllContentFieldsEnum
}

export type LocalSearchAllContentConnectionMinArgs = {
  field: LocalSearchAllContentFieldsEnum
}

export type LocalSearchAllContentConnectionSumArgs = {
  field: LocalSearchAllContentFieldsEnum
}

export type LocalSearchAllContentConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: LocalSearchAllContentFieldsEnum
}

export type LocalSearchAllContentEdge = {
  next?: Maybe<LocalSearchAllContent>
  node: LocalSearchAllContent
  previous?: Maybe<LocalSearchAllContent>
}

export enum LocalSearchAllContentFieldsEnum {
  Name = 'name',
  Engine = 'engine',
  Index = 'index',
  Store = 'store',
  PublicIndexUrl = 'publicIndexURL',
  PublicStoreUrl = 'publicStoreURL',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type LocalSearchAllContentFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  engine?: Maybe<StringQueryOperatorInput>
  index?: Maybe<StringQueryOperatorInput>
  store?: Maybe<JsonQueryOperatorInput>
  publicIndexURL?: Maybe<StringQueryOperatorInput>
  publicStoreURL?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type LocalSearchAllContentGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<LocalSearchAllContentEdge>
  nodes: Array<LocalSearchAllContent>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type LocalSearchAllContentSortInput = {
  fields?: Maybe<Array<Maybe<LocalSearchAllContentFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

/** Node Interface */
export type Node = {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>
}

export type PageInfo = {
  currentPage: Scalars['Int']
  hasPreviousPage: Scalars['Boolean']
  hasNextPage: Scalars['Boolean']
  itemCount: Scalars['Int']
  pageCount: Scalars['Int']
  perPage?: Maybe<Scalars['Int']>
  totalCount: Scalars['Int']
}

export type PrismicAllDocumentTypes =
  | PrismicCohort
  | PrismicCohortSchedule
  | PrismicFellow
  | PrismicInteriorPage
  | PrismicNavigation
  | PrismicNewsCategory
  | PrismicNewsPost
  | PrismicPage
  | PrismicProject
  | PrismicProjectCategory
  | PrismicSettings

export type PrismicAlternateLanguageType = {
  id?: Maybe<Scalars['ID']>
  uid?: Maybe<Scalars['String']>
  lang?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  document?: Maybe<PrismicAllDocumentTypes>
  raw?: Maybe<Scalars['JSON']>
}

export type PrismicAlternateLanguageTypeFilterInput = {
  id?: Maybe<IdQueryOperatorInput>
  uid?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  raw?: Maybe<JsonQueryOperatorInput>
}

export type PrismicAlternateLanguageTypeFilterListInput = {
  elemMatch?: Maybe<PrismicAlternateLanguageTypeFilterInput>
}

export type PrismicCohort = Node & {
  uid: Scalars['String']
  data?: Maybe<PrismicCohortDataType>
  dataRaw: Scalars['JSON']
  prismicId: Scalars['ID']
  alternate_languages: Array<PrismicAlternateLanguageType>
  first_publication_date: Scalars['Date']
  href: Scalars['String']
  lang: Scalars['String']
  last_publication_date: Scalars['Date']
  tags: Array<Scalars['String']>
  type: Scalars['String']
  url?: Maybe<Scalars['String']>
  _previewable: Scalars['ID']
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type PrismicCohortFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicCohortLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicCohortConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicCohortEdge>
  nodes: Array<PrismicCohort>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<PrismicCohortGroupConnection>
}

export type PrismicCohortConnectionDistinctArgs = {
  field: PrismicCohortFieldsEnum
}

export type PrismicCohortConnectionMaxArgs = {
  field: PrismicCohortFieldsEnum
}

export type PrismicCohortConnectionMinArgs = {
  field: PrismicCohortFieldsEnum
}

export type PrismicCohortConnectionSumArgs = {
  field: PrismicCohortFieldsEnum
}

export type PrismicCohortConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: PrismicCohortFieldsEnum
}

export type PrismicCohortDataType = {
  cohort_number?: Maybe<Scalars['Float']>
  title?: Maybe<PrismicStructuredTextType>
}

export type PrismicCohortDataTypeFilterInput = {
  cohort_number?: Maybe<FloatQueryOperatorInput>
  title?: Maybe<PrismicStructuredTextTypeFilterInput>
}

export type PrismicCohortEdge = {
  next?: Maybe<PrismicCohort>
  node: PrismicCohort
  previous?: Maybe<PrismicCohort>
}

export enum PrismicCohortFieldsEnum {
  Uid = 'uid',
  DataCohortNumber = 'data___cohort_number',
  DataTitleText = 'data___title___text',
  DataTitleHtml = 'data___title___html',
  DataTitleRaw = 'data___title___raw',
  DataRaw = 'dataRaw',
  PrismicId = 'prismicId',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  Type = 'type',
  Url = 'url',
  Previewable = '_previewable',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicCohortFilterInput = {
  uid?: Maybe<StringQueryOperatorInput>
  data?: Maybe<PrismicCohortDataTypeFilterInput>
  dataRaw?: Maybe<JsonQueryOperatorInput>
  prismicId?: Maybe<IdQueryOperatorInput>
  alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
  first_publication_date?: Maybe<DateQueryOperatorInput>
  href?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  last_publication_date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  _previewable?: Maybe<IdQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type PrismicCohortGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicCohortEdge>
  nodes: Array<PrismicCohort>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type PrismicCohortSchedule = Node & {
  uid: Scalars['String']
  data?: Maybe<PrismicCohortScheduleDataType>
  dataRaw: Scalars['JSON']
  prismicId: Scalars['ID']
  alternate_languages: Array<PrismicAlternateLanguageType>
  first_publication_date: Scalars['Date']
  href: Scalars['String']
  lang: Scalars['String']
  last_publication_date: Scalars['Date']
  tags: Array<Scalars['String']>
  type: Scalars['String']
  url?: Maybe<Scalars['String']>
  _previewable: Scalars['ID']
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type PrismicCohortScheduleFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicCohortScheduleLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicCohortScheduleConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicCohortScheduleEdge>
  nodes: Array<PrismicCohortSchedule>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<PrismicCohortScheduleGroupConnection>
}

export type PrismicCohortScheduleConnectionDistinctArgs = {
  field: PrismicCohortScheduleFieldsEnum
}

export type PrismicCohortScheduleConnectionMaxArgs = {
  field: PrismicCohortScheduleFieldsEnum
}

export type PrismicCohortScheduleConnectionMinArgs = {
  field: PrismicCohortScheduleFieldsEnum
}

export type PrismicCohortScheduleConnectionSumArgs = {
  field: PrismicCohortScheduleFieldsEnum
}

export type PrismicCohortScheduleConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: PrismicCohortScheduleFieldsEnum
}

export type PrismicCohortScheduleDataBodySection = PrismicSliceType & {
  items?: Maybe<Array<Maybe<PrismicCohortScheduleDataBodySectionItem>>>
  primary?: Maybe<PrismicCohortScheduleDataBodySectionPrimary>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicCohortScheduleDataBodySectionItem = {
  event_date?: Maybe<PrismicStructuredTextType>
  event_description?: Maybe<PrismicStructuredTextType>
}

export type PrismicCohortScheduleDataBodySectionPrimary = {
  dates_heading?: Maybe<PrismicStructuredTextType>
  description_heading?: Maybe<PrismicStructuredTextType>
}

export type PrismicCohortScheduleDataBodySlicesType =
  PrismicCohortScheduleDataBodySection

export type PrismicCohortScheduleDataType = {
  body?: Maybe<Array<Maybe<PrismicCohortScheduleDataBodySlicesType>>>
  title?: Maybe<PrismicStructuredTextType>
}

export type PrismicCohortScheduleDataTypeFilterInput = {
  title?: Maybe<PrismicStructuredTextTypeFilterInput>
}

export type PrismicCohortScheduleEdge = {
  next?: Maybe<PrismicCohortSchedule>
  node: PrismicCohortSchedule
  previous?: Maybe<PrismicCohortSchedule>
}

export enum PrismicCohortScheduleFieldsEnum {
  Uid = 'uid',
  DataTitleText = 'data___title___text',
  DataTitleHtml = 'data___title___html',
  DataTitleRaw = 'data___title___raw',
  DataRaw = 'dataRaw',
  PrismicId = 'prismicId',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  Type = 'type',
  Url = 'url',
  Previewable = '_previewable',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicCohortScheduleFilterInput = {
  uid?: Maybe<StringQueryOperatorInput>
  data?: Maybe<PrismicCohortScheduleDataTypeFilterInput>
  dataRaw?: Maybe<JsonQueryOperatorInput>
  prismicId?: Maybe<IdQueryOperatorInput>
  alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
  first_publication_date?: Maybe<DateQueryOperatorInput>
  href?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  last_publication_date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  _previewable?: Maybe<IdQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type PrismicCohortScheduleGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicCohortScheduleEdge>
  nodes: Array<PrismicCohortSchedule>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type PrismicCohortScheduleSortInput = {
  fields?: Maybe<Array<Maybe<PrismicCohortScheduleFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicCohortSortInput = {
  fields?: Maybe<Array<Maybe<PrismicCohortFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicEmbedType = Node & {
  is_plus?: Maybe<Scalars['String']>
  account_type?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  duration?: Maybe<Scalars['Int']>
  description?: Maybe<Scalars['String']>
  thumbnail_url_with_play_button?: Maybe<Scalars['String']>
  upload_date?: Maybe<Scalars['Date']>
  video_id?: Maybe<Scalars['Int']>
  uri?: Maybe<Scalars['String']>
  embed_url?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  author_name?: Maybe<Scalars['String']>
  author_url?: Maybe<Scalars['String']>
  provider_name?: Maybe<Scalars['String']>
  provider_url?: Maybe<Scalars['String']>
  thumbnail_url?: Maybe<Scalars['String']>
  thumbnail_width?: Maybe<Scalars['Int']>
  thumbnail_height?: Maybe<Scalars['Int']>
  html?: Maybe<Scalars['String']>
  prismicId?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type PrismicEmbedTypeUpload_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicEmbedTypeConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicEmbedTypeEdge>
  nodes: Array<PrismicEmbedType>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<PrismicEmbedTypeGroupConnection>
}

export type PrismicEmbedTypeConnectionDistinctArgs = {
  field: PrismicEmbedTypeFieldsEnum
}

export type PrismicEmbedTypeConnectionMaxArgs = {
  field: PrismicEmbedTypeFieldsEnum
}

export type PrismicEmbedTypeConnectionMinArgs = {
  field: PrismicEmbedTypeFieldsEnum
}

export type PrismicEmbedTypeConnectionSumArgs = {
  field: PrismicEmbedTypeFieldsEnum
}

export type PrismicEmbedTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: PrismicEmbedTypeFieldsEnum
}

export type PrismicEmbedTypeEdge = {
  next?: Maybe<PrismicEmbedType>
  node: PrismicEmbedType
  previous?: Maybe<PrismicEmbedType>
}

export enum PrismicEmbedTypeFieldsEnum {
  IsPlus = 'is_plus',
  AccountType = 'account_type',
  Width = 'width',
  Height = 'height',
  Duration = 'duration',
  Description = 'description',
  ThumbnailUrlWithPlayButton = 'thumbnail_url_with_play_button',
  UploadDate = 'upload_date',
  VideoId = 'video_id',
  Uri = 'uri',
  EmbedUrl = 'embed_url',
  Type = 'type',
  Version = 'version',
  Title = 'title',
  AuthorName = 'author_name',
  AuthorUrl = 'author_url',
  ProviderName = 'provider_name',
  ProviderUrl = 'provider_url',
  ThumbnailUrl = 'thumbnail_url',
  ThumbnailWidth = 'thumbnail_width',
  ThumbnailHeight = 'thumbnail_height',
  Html = 'html',
  PrismicId = 'prismicId',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicEmbedTypeFilterInput = {
  is_plus?: Maybe<StringQueryOperatorInput>
  account_type?: Maybe<StringQueryOperatorInput>
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
  duration?: Maybe<IntQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  thumbnail_url_with_play_button?: Maybe<StringQueryOperatorInput>
  upload_date?: Maybe<DateQueryOperatorInput>
  video_id?: Maybe<IntQueryOperatorInput>
  uri?: Maybe<StringQueryOperatorInput>
  embed_url?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  author_name?: Maybe<StringQueryOperatorInput>
  author_url?: Maybe<StringQueryOperatorInput>
  provider_name?: Maybe<StringQueryOperatorInput>
  provider_url?: Maybe<StringQueryOperatorInput>
  thumbnail_url?: Maybe<StringQueryOperatorInput>
  thumbnail_width?: Maybe<IntQueryOperatorInput>
  thumbnail_height?: Maybe<IntQueryOperatorInput>
  html?: Maybe<StringQueryOperatorInput>
  prismicId?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type PrismicEmbedTypeGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicEmbedTypeEdge>
  nodes: Array<PrismicEmbedType>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type PrismicEmbedTypeSortInput = {
  fields?: Maybe<Array<Maybe<PrismicEmbedTypeFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicFellow = Node & {
  uid: Scalars['String']
  data?: Maybe<PrismicFellowDataType>
  dataRaw: Scalars['JSON']
  prismicId: Scalars['ID']
  alternate_languages: Array<PrismicAlternateLanguageType>
  first_publication_date: Scalars['Date']
  href: Scalars['String']
  lang: Scalars['String']
  last_publication_date: Scalars['Date']
  tags: Array<Scalars['String']>
  type: Scalars['String']
  url?: Maybe<Scalars['String']>
  _previewable: Scalars['ID']
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type PrismicFellowFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicFellowLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicFellowConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicFellowEdge>
  nodes: Array<PrismicFellow>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<PrismicFellowGroupConnection>
}

export type PrismicFellowConnectionDistinctArgs = {
  field: PrismicFellowFieldsEnum
}

export type PrismicFellowConnectionMaxArgs = {
  field: PrismicFellowFieldsEnum
}

export type PrismicFellowConnectionMinArgs = {
  field: PrismicFellowFieldsEnum
}

export type PrismicFellowConnectionSumArgs = {
  field: PrismicFellowFieldsEnum
}

export type PrismicFellowConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: PrismicFellowFieldsEnum
}

export type PrismicFellowDataPhotoImageType = {
  alt?: Maybe<Scalars['String']>
  copyright?: Maybe<Scalars['String']>
  dimensions?: Maybe<PrismicImageDimensionsType>
  /** A plain imgix URL with the URL and params applied. */
  url?: Maybe<Scalars['String']>
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed?: Maybe<ImgixFixed>
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid?: Maybe<ImgixFluid>
  gatsbyImageData?: Maybe<Scalars['JSON']>
  localFile?: Maybe<File>
}

export type PrismicFellowDataPhotoImageTypeUrlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicFellowDataPhotoImageTypeFixedArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  imgixParams?: Maybe<ImgixParamsInput>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicFellowDataPhotoImageTypeFluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicFellowDataPhotoImageTypeGatsbyImageDataArgs = {
  layout?: Maybe<GatsbyImageLayout>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  aspectRatio?: Maybe<Scalars['Float']>
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
  sizes?: Maybe<Scalars['String']>
  backgroundColor?: Maybe<Scalars['String']>
  imgixParams?: Maybe<ImgixParamsInput>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
  placeholder?: Maybe<ImgixPlaceholder>
  widthTolerance?: Maybe<Scalars['Float']>
  srcSetMinWidth?: Maybe<Scalars['Int']>
  srcSetMaxWidth?: Maybe<Scalars['Int']>
}

export type PrismicFellowDataPhotoImageTypeFilterInput = {
  alt?: Maybe<StringQueryOperatorInput>
  copyright?: Maybe<StringQueryOperatorInput>
  dimensions?: Maybe<PrismicImageDimensionsTypeFilterInput>
  url?: Maybe<StringQueryOperatorInput>
  fixed?: Maybe<ImgixFixedFilterInput>
  fluid?: Maybe<ImgixFluidFilterInput>
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>
  localFile?: Maybe<FileFilterInput>
}

export type PrismicFellowDataPortraitImageType = {
  alt?: Maybe<Scalars['String']>
  copyright?: Maybe<Scalars['String']>
  dimensions?: Maybe<PrismicImageDimensionsType>
  /** A plain imgix URL with the URL and params applied. */
  url?: Maybe<Scalars['String']>
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed?: Maybe<ImgixFixed>
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid?: Maybe<ImgixFluid>
  gatsbyImageData?: Maybe<Scalars['JSON']>
  localFile?: Maybe<File>
}

export type PrismicFellowDataPortraitImageTypeUrlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicFellowDataPortraitImageTypeFixedArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  imgixParams?: Maybe<ImgixParamsInput>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicFellowDataPortraitImageTypeFluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicFellowDataPortraitImageTypeGatsbyImageDataArgs = {
  layout?: Maybe<GatsbyImageLayout>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  aspectRatio?: Maybe<Scalars['Float']>
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
  sizes?: Maybe<Scalars['String']>
  backgroundColor?: Maybe<Scalars['String']>
  imgixParams?: Maybe<ImgixParamsInput>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
  placeholder?: Maybe<ImgixPlaceholder>
  widthTolerance?: Maybe<Scalars['Float']>
  srcSetMinWidth?: Maybe<Scalars['Int']>
  srcSetMaxWidth?: Maybe<Scalars['Int']>
}

export type PrismicFellowDataPortraitImageTypeFilterInput = {
  alt?: Maybe<StringQueryOperatorInput>
  copyright?: Maybe<StringQueryOperatorInput>
  dimensions?: Maybe<PrismicImageDimensionsTypeFilterInput>
  url?: Maybe<StringQueryOperatorInput>
  fixed?: Maybe<ImgixFixedFilterInput>
  fluid?: Maybe<ImgixFluidFilterInput>
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>
  localFile?: Maybe<FileFilterInput>
}

export type PrismicFellowDataType = {
  biography?: Maybe<PrismicStructuredTextType>
  cohort?: Maybe<PrismicLinkType>
  name?: Maybe<PrismicStructuredTextType>
  photo?: Maybe<PrismicFellowDataPhotoImageType>
  portrait?: Maybe<PrismicFellowDataPortraitImageType>
}

export type PrismicFellowDataTypeFilterInput = {
  biography?: Maybe<PrismicStructuredTextTypeFilterInput>
  cohort?: Maybe<PrismicLinkTypeFilterInput>
  name?: Maybe<PrismicStructuredTextTypeFilterInput>
  photo?: Maybe<PrismicFellowDataPhotoImageTypeFilterInput>
  portrait?: Maybe<PrismicFellowDataPortraitImageTypeFilterInput>
}

export type PrismicFellowEdge = {
  next?: Maybe<PrismicFellow>
  node: PrismicFellow
  previous?: Maybe<PrismicFellow>
}

export enum PrismicFellowFieldsEnum {
  Uid = 'uid',
  DataBiographyText = 'data___biography___text',
  DataBiographyHtml = 'data___biography___html',
  DataBiographyRaw = 'data___biography___raw',
  DataCohortLinkType = 'data___cohort___link_type',
  DataCohortIsBroken = 'data___cohort___isBroken',
  DataCohortUrl = 'data___cohort___url',
  DataCohortTarget = 'data___cohort___target',
  DataCohortSize = 'data___cohort___size',
  DataCohortId = 'data___cohort___id',
  DataCohortType = 'data___cohort___type',
  DataCohortTags = 'data___cohort___tags',
  DataCohortLang = 'data___cohort___lang',
  DataCohortSlug = 'data___cohort___slug',
  DataCohortUid = 'data___cohort___uid',
  DataCohortLocalFileSourceInstanceName = 'data___cohort___localFile___sourceInstanceName',
  DataCohortLocalFileAbsolutePath = 'data___cohort___localFile___absolutePath',
  DataCohortLocalFileRelativePath = 'data___cohort___localFile___relativePath',
  DataCohortLocalFileExtension = 'data___cohort___localFile___extension',
  DataCohortLocalFileSize = 'data___cohort___localFile___size',
  DataCohortLocalFilePrettySize = 'data___cohort___localFile___prettySize',
  DataCohortLocalFileModifiedTime = 'data___cohort___localFile___modifiedTime',
  DataCohortLocalFileAccessTime = 'data___cohort___localFile___accessTime',
  DataCohortLocalFileChangeTime = 'data___cohort___localFile___changeTime',
  DataCohortLocalFileBirthTime = 'data___cohort___localFile___birthTime',
  DataCohortLocalFileRoot = 'data___cohort___localFile___root',
  DataCohortLocalFileDir = 'data___cohort___localFile___dir',
  DataCohortLocalFileBase = 'data___cohort___localFile___base',
  DataCohortLocalFileExt = 'data___cohort___localFile___ext',
  DataCohortLocalFileName = 'data___cohort___localFile___name',
  DataCohortLocalFileRelativeDirectory = 'data___cohort___localFile___relativeDirectory',
  DataCohortLocalFileDev = 'data___cohort___localFile___dev',
  DataCohortLocalFileMode = 'data___cohort___localFile___mode',
  DataCohortLocalFileNlink = 'data___cohort___localFile___nlink',
  DataCohortLocalFileUid = 'data___cohort___localFile___uid',
  DataCohortLocalFileGid = 'data___cohort___localFile___gid',
  DataCohortLocalFileRdev = 'data___cohort___localFile___rdev',
  DataCohortLocalFileIno = 'data___cohort___localFile___ino',
  DataCohortLocalFileAtimeMs = 'data___cohort___localFile___atimeMs',
  DataCohortLocalFileMtimeMs = 'data___cohort___localFile___mtimeMs',
  DataCohortLocalFileCtimeMs = 'data___cohort___localFile___ctimeMs',
  DataCohortLocalFileAtime = 'data___cohort___localFile___atime',
  DataCohortLocalFileMtime = 'data___cohort___localFile___mtime',
  DataCohortLocalFileCtime = 'data___cohort___localFile___ctime',
  DataCohortLocalFileBirthtime = 'data___cohort___localFile___birthtime',
  DataCohortLocalFileBirthtimeMs = 'data___cohort___localFile___birthtimeMs',
  DataCohortLocalFileId = 'data___cohort___localFile___id',
  DataCohortLocalFileChildren = 'data___cohort___localFile___children',
  DataCohortRaw = 'data___cohort___raw',
  DataNameText = 'data___name___text',
  DataNameHtml = 'data___name___html',
  DataNameRaw = 'data___name___raw',
  DataPhotoAlt = 'data___photo___alt',
  DataPhotoCopyright = 'data___photo___copyright',
  DataPhotoDimensionsWidth = 'data___photo___dimensions___width',
  DataPhotoDimensionsHeight = 'data___photo___dimensions___height',
  DataPhotoUrl = 'data___photo___url',
  DataPhotoFixedBase64 = 'data___photo___fixed___base64',
  DataPhotoFixedSrc = 'data___photo___fixed___src',
  DataPhotoFixedSrcSet = 'data___photo___fixed___srcSet',
  DataPhotoFixedSrcWebp = 'data___photo___fixed___srcWebp',
  DataPhotoFixedSrcSetWebp = 'data___photo___fixed___srcSetWebp',
  DataPhotoFixedSizes = 'data___photo___fixed___sizes',
  DataPhotoFixedWidth = 'data___photo___fixed___width',
  DataPhotoFixedHeight = 'data___photo___fixed___height',
  DataPhotoFluidBase64 = 'data___photo___fluid___base64',
  DataPhotoFluidSrc = 'data___photo___fluid___src',
  DataPhotoFluidSrcSet = 'data___photo___fluid___srcSet',
  DataPhotoFluidSrcWebp = 'data___photo___fluid___srcWebp',
  DataPhotoFluidSrcSetWebp = 'data___photo___fluid___srcSetWebp',
  DataPhotoFluidSizes = 'data___photo___fluid___sizes',
  DataPhotoFluidAspectRatio = 'data___photo___fluid___aspectRatio',
  DataPhotoGatsbyImageData = 'data___photo___gatsbyImageData',
  DataPhotoLocalFileSourceInstanceName = 'data___photo___localFile___sourceInstanceName',
  DataPhotoLocalFileAbsolutePath = 'data___photo___localFile___absolutePath',
  DataPhotoLocalFileRelativePath = 'data___photo___localFile___relativePath',
  DataPhotoLocalFileExtension = 'data___photo___localFile___extension',
  DataPhotoLocalFileSize = 'data___photo___localFile___size',
  DataPhotoLocalFilePrettySize = 'data___photo___localFile___prettySize',
  DataPhotoLocalFileModifiedTime = 'data___photo___localFile___modifiedTime',
  DataPhotoLocalFileAccessTime = 'data___photo___localFile___accessTime',
  DataPhotoLocalFileChangeTime = 'data___photo___localFile___changeTime',
  DataPhotoLocalFileBirthTime = 'data___photo___localFile___birthTime',
  DataPhotoLocalFileRoot = 'data___photo___localFile___root',
  DataPhotoLocalFileDir = 'data___photo___localFile___dir',
  DataPhotoLocalFileBase = 'data___photo___localFile___base',
  DataPhotoLocalFileExt = 'data___photo___localFile___ext',
  DataPhotoLocalFileName = 'data___photo___localFile___name',
  DataPhotoLocalFileRelativeDirectory = 'data___photo___localFile___relativeDirectory',
  DataPhotoLocalFileDev = 'data___photo___localFile___dev',
  DataPhotoLocalFileMode = 'data___photo___localFile___mode',
  DataPhotoLocalFileNlink = 'data___photo___localFile___nlink',
  DataPhotoLocalFileUid = 'data___photo___localFile___uid',
  DataPhotoLocalFileGid = 'data___photo___localFile___gid',
  DataPhotoLocalFileRdev = 'data___photo___localFile___rdev',
  DataPhotoLocalFileIno = 'data___photo___localFile___ino',
  DataPhotoLocalFileAtimeMs = 'data___photo___localFile___atimeMs',
  DataPhotoLocalFileMtimeMs = 'data___photo___localFile___mtimeMs',
  DataPhotoLocalFileCtimeMs = 'data___photo___localFile___ctimeMs',
  DataPhotoLocalFileAtime = 'data___photo___localFile___atime',
  DataPhotoLocalFileMtime = 'data___photo___localFile___mtime',
  DataPhotoLocalFileCtime = 'data___photo___localFile___ctime',
  DataPhotoLocalFileBirthtime = 'data___photo___localFile___birthtime',
  DataPhotoLocalFileBirthtimeMs = 'data___photo___localFile___birthtimeMs',
  DataPhotoLocalFileId = 'data___photo___localFile___id',
  DataPhotoLocalFileChildren = 'data___photo___localFile___children',
  DataPortraitAlt = 'data___portrait___alt',
  DataPortraitCopyright = 'data___portrait___copyright',
  DataPortraitDimensionsWidth = 'data___portrait___dimensions___width',
  DataPortraitDimensionsHeight = 'data___portrait___dimensions___height',
  DataPortraitUrl = 'data___portrait___url',
  DataPortraitFixedBase64 = 'data___portrait___fixed___base64',
  DataPortraitFixedSrc = 'data___portrait___fixed___src',
  DataPortraitFixedSrcSet = 'data___portrait___fixed___srcSet',
  DataPortraitFixedSrcWebp = 'data___portrait___fixed___srcWebp',
  DataPortraitFixedSrcSetWebp = 'data___portrait___fixed___srcSetWebp',
  DataPortraitFixedSizes = 'data___portrait___fixed___sizes',
  DataPortraitFixedWidth = 'data___portrait___fixed___width',
  DataPortraitFixedHeight = 'data___portrait___fixed___height',
  DataPortraitFluidBase64 = 'data___portrait___fluid___base64',
  DataPortraitFluidSrc = 'data___portrait___fluid___src',
  DataPortraitFluidSrcSet = 'data___portrait___fluid___srcSet',
  DataPortraitFluidSrcWebp = 'data___portrait___fluid___srcWebp',
  DataPortraitFluidSrcSetWebp = 'data___portrait___fluid___srcSetWebp',
  DataPortraitFluidSizes = 'data___portrait___fluid___sizes',
  DataPortraitFluidAspectRatio = 'data___portrait___fluid___aspectRatio',
  DataPortraitGatsbyImageData = 'data___portrait___gatsbyImageData',
  DataPortraitLocalFileSourceInstanceName = 'data___portrait___localFile___sourceInstanceName',
  DataPortraitLocalFileAbsolutePath = 'data___portrait___localFile___absolutePath',
  DataPortraitLocalFileRelativePath = 'data___portrait___localFile___relativePath',
  DataPortraitLocalFileExtension = 'data___portrait___localFile___extension',
  DataPortraitLocalFileSize = 'data___portrait___localFile___size',
  DataPortraitLocalFilePrettySize = 'data___portrait___localFile___prettySize',
  DataPortraitLocalFileModifiedTime = 'data___portrait___localFile___modifiedTime',
  DataPortraitLocalFileAccessTime = 'data___portrait___localFile___accessTime',
  DataPortraitLocalFileChangeTime = 'data___portrait___localFile___changeTime',
  DataPortraitLocalFileBirthTime = 'data___portrait___localFile___birthTime',
  DataPortraitLocalFileRoot = 'data___portrait___localFile___root',
  DataPortraitLocalFileDir = 'data___portrait___localFile___dir',
  DataPortraitLocalFileBase = 'data___portrait___localFile___base',
  DataPortraitLocalFileExt = 'data___portrait___localFile___ext',
  DataPortraitLocalFileName = 'data___portrait___localFile___name',
  DataPortraitLocalFileRelativeDirectory = 'data___portrait___localFile___relativeDirectory',
  DataPortraitLocalFileDev = 'data___portrait___localFile___dev',
  DataPortraitLocalFileMode = 'data___portrait___localFile___mode',
  DataPortraitLocalFileNlink = 'data___portrait___localFile___nlink',
  DataPortraitLocalFileUid = 'data___portrait___localFile___uid',
  DataPortraitLocalFileGid = 'data___portrait___localFile___gid',
  DataPortraitLocalFileRdev = 'data___portrait___localFile___rdev',
  DataPortraitLocalFileIno = 'data___portrait___localFile___ino',
  DataPortraitLocalFileAtimeMs = 'data___portrait___localFile___atimeMs',
  DataPortraitLocalFileMtimeMs = 'data___portrait___localFile___mtimeMs',
  DataPortraitLocalFileCtimeMs = 'data___portrait___localFile___ctimeMs',
  DataPortraitLocalFileAtime = 'data___portrait___localFile___atime',
  DataPortraitLocalFileMtime = 'data___portrait___localFile___mtime',
  DataPortraitLocalFileCtime = 'data___portrait___localFile___ctime',
  DataPortraitLocalFileBirthtime = 'data___portrait___localFile___birthtime',
  DataPortraitLocalFileBirthtimeMs = 'data___portrait___localFile___birthtimeMs',
  DataPortraitLocalFileId = 'data___portrait___localFile___id',
  DataPortraitLocalFileChildren = 'data___portrait___localFile___children',
  DataRaw = 'dataRaw',
  PrismicId = 'prismicId',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  Type = 'type',
  Url = 'url',
  Previewable = '_previewable',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicFellowFilterInput = {
  uid?: Maybe<StringQueryOperatorInput>
  data?: Maybe<PrismicFellowDataTypeFilterInput>
  dataRaw?: Maybe<JsonQueryOperatorInput>
  prismicId?: Maybe<IdQueryOperatorInput>
  alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
  first_publication_date?: Maybe<DateQueryOperatorInput>
  href?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  last_publication_date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  _previewable?: Maybe<IdQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type PrismicFellowGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicFellowEdge>
  nodes: Array<PrismicFellow>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type PrismicFellowSortInput = {
  fields?: Maybe<Array<Maybe<PrismicFellowFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicGeoPointType = {
  longitude: Scalars['Float']
  latitude: Scalars['Float']
}

export type PrismicImageDimensionsType = {
  width: Scalars['Int']
  height: Scalars['Int']
}

export type PrismicImageDimensionsTypeFilterInput = {
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
}

export type PrismicImageThumbnailType = {
  alt?: Maybe<Scalars['String']>
  copyright?: Maybe<Scalars['String']>
  dimensions?: Maybe<PrismicImageDimensionsType>
  /** A plain imgix URL with the URL and params applied. */
  url?: Maybe<Scalars['String']>
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed?: Maybe<ImgixFixed>
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid?: Maybe<ImgixFluid>
  gatsbyImageData?: Maybe<Scalars['JSON']>
  localFile?: Maybe<File>
}

export type PrismicImageThumbnailTypeUrlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicImageThumbnailTypeFixedArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  imgixParams?: Maybe<ImgixParamsInput>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicImageThumbnailTypeFluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicImageThumbnailTypeGatsbyImageDataArgs = {
  layout?: Maybe<GatsbyImageLayout>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  aspectRatio?: Maybe<Scalars['Float']>
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
  sizes?: Maybe<Scalars['String']>
  backgroundColor?: Maybe<Scalars['String']>
  imgixParams?: Maybe<ImgixParamsInput>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
  placeholder?: Maybe<ImgixPlaceholder>
  widthTolerance?: Maybe<Scalars['Float']>
  srcSetMinWidth?: Maybe<Scalars['Int']>
  srcSetMaxWidth?: Maybe<Scalars['Int']>
}

export type PrismicInteriorPage = Node & {
  uid: Scalars['String']
  data?: Maybe<PrismicInteriorPageDataType>
  dataRaw: Scalars['JSON']
  prismicId: Scalars['ID']
  alternate_languages: Array<PrismicAlternateLanguageType>
  first_publication_date: Scalars['Date']
  href: Scalars['String']
  lang: Scalars['String']
  last_publication_date: Scalars['Date']
  tags: Array<Scalars['String']>
  type: Scalars['String']
  url?: Maybe<Scalars['String']>
  _previewable: Scalars['ID']
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type PrismicInteriorPageFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicInteriorPageLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicInteriorPageConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicInteriorPageEdge>
  nodes: Array<PrismicInteriorPage>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<PrismicInteriorPageGroupConnection>
}

export type PrismicInteriorPageConnectionDistinctArgs = {
  field: PrismicInteriorPageFieldsEnum
}

export type PrismicInteriorPageConnectionMaxArgs = {
  field: PrismicInteriorPageFieldsEnum
}

export type PrismicInteriorPageConnectionMinArgs = {
  field: PrismicInteriorPageFieldsEnum
}

export type PrismicInteriorPageConnectionSumArgs = {
  field: PrismicInteriorPageFieldsEnum
}

export type PrismicInteriorPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: PrismicInteriorPageFieldsEnum
}

export type PrismicInteriorPageDataBodyAnchor = PrismicSliceType & {
  primary?: Maybe<PrismicInteriorPageDataBodyAnchorPrimary>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicInteriorPageDataBodyAnchorPrimary = {
  id?: Maybe<Scalars['String']>
}

export type PrismicInteriorPageDataBodyCohortSchedule = PrismicSliceType & {
  primary?: Maybe<PrismicInteriorPageDataBodyCohortSchedulePrimary>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicInteriorPageDataBodyCohortSchedulePrimary = {
  cohort_schedule?: Maybe<PrismicLinkType>
}

export type PrismicInteriorPageDataBodyDivider = PrismicSliceType & {
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicInteriorPageDataBodyImages = PrismicSliceType & {
  items?: Maybe<Array<Maybe<PrismicInteriorPageDataBodyImagesItem>>>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicInteriorPageDataBodyImagesItem = {
  caption?: Maybe<PrismicStructuredTextType>
  image?: Maybe<PrismicInteriorPageDataBodyImagesItemsImageImageType>
}

export type PrismicInteriorPageDataBodyImagesItemsImageImageType = {
  alt?: Maybe<Scalars['String']>
  copyright?: Maybe<Scalars['String']>
  dimensions?: Maybe<PrismicImageDimensionsType>
  /** A plain imgix URL with the URL and params applied. */
  url?: Maybe<Scalars['String']>
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed?: Maybe<ImgixFixed>
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid?: Maybe<ImgixFluid>
  gatsbyImageData?: Maybe<Scalars['JSON']>
  localFile?: Maybe<File>
}

export type PrismicInteriorPageDataBodyImagesItemsImageImageTypeUrlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicInteriorPageDataBodyImagesItemsImageImageTypeFixedArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  imgixParams?: Maybe<ImgixParamsInput>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicInteriorPageDataBodyImagesItemsImageImageTypeFluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicInteriorPageDataBodyImagesItemsImageImageTypeGatsbyImageDataArgs =
  {
    layout?: Maybe<GatsbyImageLayout>
    width?: Maybe<Scalars['Int']>
    height?: Maybe<Scalars['Int']>
    aspectRatio?: Maybe<Scalars['Float']>
    outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>
    breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
    sizes?: Maybe<Scalars['String']>
    backgroundColor?: Maybe<Scalars['String']>
    imgixParams?: Maybe<ImgixParamsInput>
    placeholderImgixParams?: Maybe<ImgixParamsInput>
    placeholder?: Maybe<ImgixPlaceholder>
    widthTolerance?: Maybe<Scalars['Float']>
    srcSetMinWidth?: Maybe<Scalars['Int']>
    srcSetMaxWidth?: Maybe<Scalars['Int']>
  }

export type PrismicInteriorPageDataBodyLinkCard = PrismicSliceType & {
  primary?: Maybe<PrismicInteriorPageDataBodyLinkCardPrimary>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicInteriorPageDataBodyLinkCardPrimary = {
  link?: Maybe<PrismicLinkType>
  link_title?: Maybe<PrismicStructuredTextType>
}

export type PrismicInteriorPageDataBodySlicesType =
  | PrismicInteriorPageDataBodyAnchor
  | PrismicInteriorPageDataBodyCohortSchedule
  | PrismicInteriorPageDataBodyDivider
  | PrismicInteriorPageDataBodyImages
  | PrismicInteriorPageDataBodyLinkCard
  | PrismicInteriorPageDataBodyStaffDirectory
  | PrismicInteriorPageDataBodyText
  | PrismicInteriorPageDataBodyTextIntro
  | PrismicInteriorPageDataBodyVideo

export type PrismicInteriorPageDataBodyStaffDirectory = PrismicSliceType & {
  items?: Maybe<Array<Maybe<PrismicInteriorPageDataBodyStaffDirectoryItem>>>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicInteriorPageDataBodyStaffDirectoryItem = {
  biography?: Maybe<PrismicStructuredTextType>
  name?: Maybe<PrismicStructuredTextType>
  photo?: Maybe<PrismicInteriorPageDataBodyStaffDirectoryItemsPhotoImageType>
  staff_title?: Maybe<PrismicStructuredTextType>
}

export type PrismicInteriorPageDataBodyStaffDirectoryItemsPhotoImageType = {
  alt?: Maybe<Scalars['String']>
  copyright?: Maybe<Scalars['String']>
  dimensions?: Maybe<PrismicImageDimensionsType>
  /** A plain imgix URL with the URL and params applied. */
  url?: Maybe<Scalars['String']>
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed?: Maybe<ImgixFixed>
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid?: Maybe<ImgixFluid>
  gatsbyImageData?: Maybe<Scalars['JSON']>
  localFile?: Maybe<File>
}

export type PrismicInteriorPageDataBodyStaffDirectoryItemsPhotoImageTypeUrlArgs =
  {
    imgixParams?: Maybe<ImgixParamsInput>
  }

export type PrismicInteriorPageDataBodyStaffDirectoryItemsPhotoImageTypeFixedArgs =
  {
    width?: Maybe<Scalars['Int']>
    height?: Maybe<Scalars['Int']>
    quality?: Maybe<Scalars['Int']>
    imgixParams?: Maybe<ImgixParamsInput>
    placeholderImgixParams?: Maybe<ImgixParamsInput>
  }

export type PrismicInteriorPageDataBodyStaffDirectoryItemsPhotoImageTypeFluidArgs =
  {
    imgixParams?: Maybe<ImgixParamsInput>
    maxWidth?: Maybe<Scalars['Int']>
    maxHeight?: Maybe<Scalars['Int']>
    srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
    placeholderImgixParams?: Maybe<ImgixParamsInput>
  }

export type PrismicInteriorPageDataBodyStaffDirectoryItemsPhotoImageTypeGatsbyImageDataArgs =
  {
    layout?: Maybe<GatsbyImageLayout>
    width?: Maybe<Scalars['Int']>
    height?: Maybe<Scalars['Int']>
    aspectRatio?: Maybe<Scalars['Float']>
    outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>
    breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
    sizes?: Maybe<Scalars['String']>
    backgroundColor?: Maybe<Scalars['String']>
    imgixParams?: Maybe<ImgixParamsInput>
    placeholderImgixParams?: Maybe<ImgixParamsInput>
    placeholder?: Maybe<ImgixPlaceholder>
    widthTolerance?: Maybe<Scalars['Float']>
    srcSetMinWidth?: Maybe<Scalars['Int']>
    srcSetMaxWidth?: Maybe<Scalars['Int']>
  }

export type PrismicInteriorPageDataBodyText = PrismicSliceType & {
  primary?: Maybe<PrismicInteriorPageDataBodyTextPrimary>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicInteriorPageDataBodyTextIntro = PrismicSliceType & {
  primary?: Maybe<PrismicInteriorPageDataBodyTextIntroPrimary>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicInteriorPageDataBodyTextIntroPrimary = {
  introductory_text?: Maybe<PrismicStructuredTextType>
}

export type PrismicInteriorPageDataBodyTextPrimary = {
  text?: Maybe<PrismicStructuredTextType>
}

export type PrismicInteriorPageDataBodyVideo = PrismicSliceType & {
  primary?: Maybe<PrismicInteriorPageDataBodyVideoPrimary>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicInteriorPageDataBodyVideoPrimary = {
  poster?: Maybe<PrismicInteriorPageDataBodyVideoPrimaryPosterImageType>
  video?: Maybe<PrismicEmbedType>
}

export type PrismicInteriorPageDataBodyVideoPrimaryPosterImageType = {
  alt?: Maybe<Scalars['String']>
  copyright?: Maybe<Scalars['String']>
  dimensions?: Maybe<PrismicImageDimensionsType>
  /** A plain imgix URL with the URL and params applied. */
  url?: Maybe<Scalars['String']>
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed?: Maybe<ImgixFixed>
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid?: Maybe<ImgixFluid>
  gatsbyImageData?: Maybe<Scalars['JSON']>
  localFile?: Maybe<File>
}

export type PrismicInteriorPageDataBodyVideoPrimaryPosterImageTypeUrlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicInteriorPageDataBodyVideoPrimaryPosterImageTypeFixedArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  imgixParams?: Maybe<ImgixParamsInput>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicInteriorPageDataBodyVideoPrimaryPosterImageTypeFluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicInteriorPageDataBodyVideoPrimaryPosterImageTypeGatsbyImageDataArgs =
  {
    layout?: Maybe<GatsbyImageLayout>
    width?: Maybe<Scalars['Int']>
    height?: Maybe<Scalars['Int']>
    aspectRatio?: Maybe<Scalars['Float']>
    outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>
    breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
    sizes?: Maybe<Scalars['String']>
    backgroundColor?: Maybe<Scalars['String']>
    imgixParams?: Maybe<ImgixParamsInput>
    placeholderImgixParams?: Maybe<ImgixParamsInput>
    placeholder?: Maybe<ImgixPlaceholder>
    widthTolerance?: Maybe<Scalars['Float']>
    srcSetMinWidth?: Maybe<Scalars['Int']>
    srcSetMaxWidth?: Maybe<Scalars['Int']>
  }

export type PrismicInteriorPageDataHeaderHeroImage = PrismicSliceType & {
  primary?: Maybe<PrismicInteriorPageDataHeaderHeroImagePrimary>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicInteriorPageDataHeaderHeroImagePrimary = {
  background_image?: Maybe<PrismicInteriorPageDataHeaderHeroImagePrimaryBackgroundImageImageType>
  heading?: Maybe<PrismicStructuredTextType>
}

export type PrismicInteriorPageDataHeaderHeroImagePrimaryBackgroundImageImageType =
  {
    alt?: Maybe<Scalars['String']>
    copyright?: Maybe<Scalars['String']>
    dimensions?: Maybe<PrismicImageDimensionsType>
    /** A plain imgix URL with the URL and params applied. */
    url?: Maybe<Scalars['String']>
    /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
    fixed?: Maybe<ImgixFixed>
    /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
    fluid?: Maybe<ImgixFluid>
    gatsbyImageData?: Maybe<Scalars['JSON']>
    localFile?: Maybe<File>
  }

export type PrismicInteriorPageDataHeaderHeroImagePrimaryBackgroundImageImageTypeUrlArgs =
  {
    imgixParams?: Maybe<ImgixParamsInput>
  }

export type PrismicInteriorPageDataHeaderHeroImagePrimaryBackgroundImageImageTypeFixedArgs =
  {
    width?: Maybe<Scalars['Int']>
    height?: Maybe<Scalars['Int']>
    quality?: Maybe<Scalars['Int']>
    imgixParams?: Maybe<ImgixParamsInput>
    placeholderImgixParams?: Maybe<ImgixParamsInput>
  }

export type PrismicInteriorPageDataHeaderHeroImagePrimaryBackgroundImageImageTypeFluidArgs =
  {
    imgixParams?: Maybe<ImgixParamsInput>
    maxWidth?: Maybe<Scalars['Int']>
    maxHeight?: Maybe<Scalars['Int']>
    srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
    placeholderImgixParams?: Maybe<ImgixParamsInput>
  }

export type PrismicInteriorPageDataHeaderHeroImagePrimaryBackgroundImageImageTypeGatsbyImageDataArgs =
  {
    layout?: Maybe<GatsbyImageLayout>
    width?: Maybe<Scalars['Int']>
    height?: Maybe<Scalars['Int']>
    aspectRatio?: Maybe<Scalars['Float']>
    outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>
    breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
    sizes?: Maybe<Scalars['String']>
    backgroundColor?: Maybe<Scalars['String']>
    imgixParams?: Maybe<ImgixParamsInput>
    placeholderImgixParams?: Maybe<ImgixParamsInput>
    placeholder?: Maybe<ImgixPlaceholder>
    widthTolerance?: Maybe<Scalars['Float']>
    srcSetMinWidth?: Maybe<Scalars['Int']>
    srcSetMaxWidth?: Maybe<Scalars['Int']>
  }

export type PrismicInteriorPageDataHeaderSlicesType =
  PrismicInteriorPageDataHeaderHeroImage

export type PrismicInteriorPageDataType = {
  body?: Maybe<Array<Maybe<PrismicInteriorPageDataBodySlicesType>>>
  header?: Maybe<Array<Maybe<PrismicInteriorPageDataHeaderSlicesType>>>
  meta_description?: Maybe<Scalars['String']>
  meta_title?: Maybe<Scalars['String']>
  parent?: Maybe<PrismicLinkType>
  redirect_is_permanent?: Maybe<Scalars['Boolean']>
  redirect_to?: Maybe<PrismicLinkType>
  title?: Maybe<PrismicStructuredTextType>
}

export type PrismicInteriorPageDataTypeFilterInput = {
  meta_description?: Maybe<StringQueryOperatorInput>
  meta_title?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<PrismicLinkTypeFilterInput>
  redirect_is_permanent?: Maybe<BooleanQueryOperatorInput>
  redirect_to?: Maybe<PrismicLinkTypeFilterInput>
  title?: Maybe<PrismicStructuredTextTypeFilterInput>
}

export type PrismicInteriorPageEdge = {
  next?: Maybe<PrismicInteriorPage>
  node: PrismicInteriorPage
  previous?: Maybe<PrismicInteriorPage>
}

export enum PrismicInteriorPageFieldsEnum {
  Uid = 'uid',
  DataMetaDescription = 'data___meta_description',
  DataMetaTitle = 'data___meta_title',
  DataParentLinkType = 'data___parent___link_type',
  DataParentIsBroken = 'data___parent___isBroken',
  DataParentUrl = 'data___parent___url',
  DataParentTarget = 'data___parent___target',
  DataParentSize = 'data___parent___size',
  DataParentId = 'data___parent___id',
  DataParentType = 'data___parent___type',
  DataParentTags = 'data___parent___tags',
  DataParentLang = 'data___parent___lang',
  DataParentSlug = 'data___parent___slug',
  DataParentUid = 'data___parent___uid',
  DataParentLocalFileSourceInstanceName = 'data___parent___localFile___sourceInstanceName',
  DataParentLocalFileAbsolutePath = 'data___parent___localFile___absolutePath',
  DataParentLocalFileRelativePath = 'data___parent___localFile___relativePath',
  DataParentLocalFileExtension = 'data___parent___localFile___extension',
  DataParentLocalFileSize = 'data___parent___localFile___size',
  DataParentLocalFilePrettySize = 'data___parent___localFile___prettySize',
  DataParentLocalFileModifiedTime = 'data___parent___localFile___modifiedTime',
  DataParentLocalFileAccessTime = 'data___parent___localFile___accessTime',
  DataParentLocalFileChangeTime = 'data___parent___localFile___changeTime',
  DataParentLocalFileBirthTime = 'data___parent___localFile___birthTime',
  DataParentLocalFileRoot = 'data___parent___localFile___root',
  DataParentLocalFileDir = 'data___parent___localFile___dir',
  DataParentLocalFileBase = 'data___parent___localFile___base',
  DataParentLocalFileExt = 'data___parent___localFile___ext',
  DataParentLocalFileName = 'data___parent___localFile___name',
  DataParentLocalFileRelativeDirectory = 'data___parent___localFile___relativeDirectory',
  DataParentLocalFileDev = 'data___parent___localFile___dev',
  DataParentLocalFileMode = 'data___parent___localFile___mode',
  DataParentLocalFileNlink = 'data___parent___localFile___nlink',
  DataParentLocalFileUid = 'data___parent___localFile___uid',
  DataParentLocalFileGid = 'data___parent___localFile___gid',
  DataParentLocalFileRdev = 'data___parent___localFile___rdev',
  DataParentLocalFileIno = 'data___parent___localFile___ino',
  DataParentLocalFileAtimeMs = 'data___parent___localFile___atimeMs',
  DataParentLocalFileMtimeMs = 'data___parent___localFile___mtimeMs',
  DataParentLocalFileCtimeMs = 'data___parent___localFile___ctimeMs',
  DataParentLocalFileAtime = 'data___parent___localFile___atime',
  DataParentLocalFileMtime = 'data___parent___localFile___mtime',
  DataParentLocalFileCtime = 'data___parent___localFile___ctime',
  DataParentLocalFileBirthtime = 'data___parent___localFile___birthtime',
  DataParentLocalFileBirthtimeMs = 'data___parent___localFile___birthtimeMs',
  DataParentLocalFileId = 'data___parent___localFile___id',
  DataParentLocalFileChildren = 'data___parent___localFile___children',
  DataParentRaw = 'data___parent___raw',
  DataRedirectIsPermanent = 'data___redirect_is_permanent',
  DataRedirectToLinkType = 'data___redirect_to___link_type',
  DataRedirectToIsBroken = 'data___redirect_to___isBroken',
  DataRedirectToUrl = 'data___redirect_to___url',
  DataRedirectToTarget = 'data___redirect_to___target',
  DataRedirectToSize = 'data___redirect_to___size',
  DataRedirectToId = 'data___redirect_to___id',
  DataRedirectToType = 'data___redirect_to___type',
  DataRedirectToTags = 'data___redirect_to___tags',
  DataRedirectToLang = 'data___redirect_to___lang',
  DataRedirectToSlug = 'data___redirect_to___slug',
  DataRedirectToUid = 'data___redirect_to___uid',
  DataRedirectToLocalFileSourceInstanceName = 'data___redirect_to___localFile___sourceInstanceName',
  DataRedirectToLocalFileAbsolutePath = 'data___redirect_to___localFile___absolutePath',
  DataRedirectToLocalFileRelativePath = 'data___redirect_to___localFile___relativePath',
  DataRedirectToLocalFileExtension = 'data___redirect_to___localFile___extension',
  DataRedirectToLocalFileSize = 'data___redirect_to___localFile___size',
  DataRedirectToLocalFilePrettySize = 'data___redirect_to___localFile___prettySize',
  DataRedirectToLocalFileModifiedTime = 'data___redirect_to___localFile___modifiedTime',
  DataRedirectToLocalFileAccessTime = 'data___redirect_to___localFile___accessTime',
  DataRedirectToLocalFileChangeTime = 'data___redirect_to___localFile___changeTime',
  DataRedirectToLocalFileBirthTime = 'data___redirect_to___localFile___birthTime',
  DataRedirectToLocalFileRoot = 'data___redirect_to___localFile___root',
  DataRedirectToLocalFileDir = 'data___redirect_to___localFile___dir',
  DataRedirectToLocalFileBase = 'data___redirect_to___localFile___base',
  DataRedirectToLocalFileExt = 'data___redirect_to___localFile___ext',
  DataRedirectToLocalFileName = 'data___redirect_to___localFile___name',
  DataRedirectToLocalFileRelativeDirectory = 'data___redirect_to___localFile___relativeDirectory',
  DataRedirectToLocalFileDev = 'data___redirect_to___localFile___dev',
  DataRedirectToLocalFileMode = 'data___redirect_to___localFile___mode',
  DataRedirectToLocalFileNlink = 'data___redirect_to___localFile___nlink',
  DataRedirectToLocalFileUid = 'data___redirect_to___localFile___uid',
  DataRedirectToLocalFileGid = 'data___redirect_to___localFile___gid',
  DataRedirectToLocalFileRdev = 'data___redirect_to___localFile___rdev',
  DataRedirectToLocalFileIno = 'data___redirect_to___localFile___ino',
  DataRedirectToLocalFileAtimeMs = 'data___redirect_to___localFile___atimeMs',
  DataRedirectToLocalFileMtimeMs = 'data___redirect_to___localFile___mtimeMs',
  DataRedirectToLocalFileCtimeMs = 'data___redirect_to___localFile___ctimeMs',
  DataRedirectToLocalFileAtime = 'data___redirect_to___localFile___atime',
  DataRedirectToLocalFileMtime = 'data___redirect_to___localFile___mtime',
  DataRedirectToLocalFileCtime = 'data___redirect_to___localFile___ctime',
  DataRedirectToLocalFileBirthtime = 'data___redirect_to___localFile___birthtime',
  DataRedirectToLocalFileBirthtimeMs = 'data___redirect_to___localFile___birthtimeMs',
  DataRedirectToLocalFileId = 'data___redirect_to___localFile___id',
  DataRedirectToLocalFileChildren = 'data___redirect_to___localFile___children',
  DataRedirectToRaw = 'data___redirect_to___raw',
  DataTitleText = 'data___title___text',
  DataTitleHtml = 'data___title___html',
  DataTitleRaw = 'data___title___raw',
  DataRaw = 'dataRaw',
  PrismicId = 'prismicId',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  Type = 'type',
  Url = 'url',
  Previewable = '_previewable',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicInteriorPageFilterInput = {
  uid?: Maybe<StringQueryOperatorInput>
  data?: Maybe<PrismicInteriorPageDataTypeFilterInput>
  dataRaw?: Maybe<JsonQueryOperatorInput>
  prismicId?: Maybe<IdQueryOperatorInput>
  alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
  first_publication_date?: Maybe<DateQueryOperatorInput>
  href?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  last_publication_date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  _previewable?: Maybe<IdQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type PrismicInteriorPageGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicInteriorPageEdge>
  nodes: Array<PrismicInteriorPage>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type PrismicInteriorPageSortInput = {
  fields?: Maybe<Array<Maybe<PrismicInteriorPageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicLinkType = {
  link_type?: Maybe<PrismicLinkTypeEnum>
  isBroken?: Maybe<Scalars['Boolean']>
  url?: Maybe<Scalars['String']>
  target?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['ID']>
  type?: Maybe<Scalars['String']>
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
  lang?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  uid?: Maybe<Scalars['String']>
  document?: Maybe<PrismicAllDocumentTypes>
  localFile?: Maybe<File>
  raw?: Maybe<Scalars['JSON']>
}

export enum PrismicLinkTypeEnum {
  Any = 'Any',
  Document = 'Document',
  Media = 'Media',
  Web = 'Web',
}

export type PrismicLinkTypeEnumQueryOperatorInput = {
  eq?: Maybe<PrismicLinkTypeEnum>
  ne?: Maybe<PrismicLinkTypeEnum>
  in?: Maybe<Array<Maybe<PrismicLinkTypeEnum>>>
  nin?: Maybe<Array<Maybe<PrismicLinkTypeEnum>>>
}

export type PrismicLinkTypeFilterInput = {
  link_type?: Maybe<PrismicLinkTypeEnumQueryOperatorInput>
  isBroken?: Maybe<BooleanQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  target?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  id?: Maybe<IdQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  uid?: Maybe<StringQueryOperatorInput>
  localFile?: Maybe<FileFilterInput>
  raw?: Maybe<JsonQueryOperatorInput>
}

export type PrismicNavigation = Node & {
  uid: Scalars['String']
  data?: Maybe<PrismicNavigationDataType>
  dataRaw: Scalars['JSON']
  prismicId: Scalars['ID']
  alternate_languages: Array<PrismicAlternateLanguageType>
  first_publication_date: Scalars['Date']
  href: Scalars['String']
  lang: Scalars['String']
  last_publication_date: Scalars['Date']
  tags: Array<Scalars['String']>
  type: Scalars['String']
  url?: Maybe<Scalars['String']>
  _previewable: Scalars['ID']
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type PrismicNavigationFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicNavigationLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicNavigationConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicNavigationEdge>
  nodes: Array<PrismicNavigation>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<PrismicNavigationGroupConnection>
}

export type PrismicNavigationConnectionDistinctArgs = {
  field: PrismicNavigationFieldsEnum
}

export type PrismicNavigationConnectionMaxArgs = {
  field: PrismicNavigationFieldsEnum
}

export type PrismicNavigationConnectionMinArgs = {
  field: PrismicNavigationFieldsEnum
}

export type PrismicNavigationConnectionSumArgs = {
  field: PrismicNavigationFieldsEnum
}

export type PrismicNavigationConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: PrismicNavigationFieldsEnum
}

export type PrismicNavigationDataMainNavItem = PrismicSliceType & {
  items?: Maybe<Array<Maybe<PrismicNavigationDataMainNavItemItem>>>
  primary?: Maybe<PrismicNavigationDataMainNavItemPrimary>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicNavigationDataMainNavItemItem = {
  link?: Maybe<PrismicLinkType>
  name?: Maybe<Scalars['String']>
}

export type PrismicNavigationDataMainNavItemPrimary = {
  link?: Maybe<PrismicLinkType>
  name?: Maybe<Scalars['String']>
}

export type PrismicNavigationDataMainSlicesType =
  PrismicNavigationDataMainNavItem

export type PrismicNavigationDataType = {
  main?: Maybe<Array<Maybe<PrismicNavigationDataMainSlicesType>>>
  title?: Maybe<PrismicStructuredTextType>
}

export type PrismicNavigationDataTypeFilterInput = {
  title?: Maybe<PrismicStructuredTextTypeFilterInput>
}

export type PrismicNavigationEdge = {
  next?: Maybe<PrismicNavigation>
  node: PrismicNavigation
  previous?: Maybe<PrismicNavigation>
}

export enum PrismicNavigationFieldsEnum {
  Uid = 'uid',
  DataTitleText = 'data___title___text',
  DataTitleHtml = 'data___title___html',
  DataTitleRaw = 'data___title___raw',
  DataRaw = 'dataRaw',
  PrismicId = 'prismicId',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  Type = 'type',
  Url = 'url',
  Previewable = '_previewable',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicNavigationFilterInput = {
  uid?: Maybe<StringQueryOperatorInput>
  data?: Maybe<PrismicNavigationDataTypeFilterInput>
  dataRaw?: Maybe<JsonQueryOperatorInput>
  prismicId?: Maybe<IdQueryOperatorInput>
  alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
  first_publication_date?: Maybe<DateQueryOperatorInput>
  href?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  last_publication_date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  _previewable?: Maybe<IdQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type PrismicNavigationGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicNavigationEdge>
  nodes: Array<PrismicNavigation>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type PrismicNavigationSortInput = {
  fields?: Maybe<Array<Maybe<PrismicNavigationFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicNewsCategory = Node & {
  uid: Scalars['String']
  data?: Maybe<PrismicNewsCategoryDataType>
  dataRaw: Scalars['JSON']
  prismicId: Scalars['ID']
  alternate_languages: Array<PrismicAlternateLanguageType>
  first_publication_date: Scalars['Date']
  href: Scalars['String']
  lang: Scalars['String']
  last_publication_date: Scalars['Date']
  tags: Array<Scalars['String']>
  type: Scalars['String']
  url?: Maybe<Scalars['String']>
  _previewable: Scalars['ID']
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type PrismicNewsCategoryFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicNewsCategoryLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicNewsCategoryConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicNewsCategoryEdge>
  nodes: Array<PrismicNewsCategory>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<PrismicNewsCategoryGroupConnection>
}

export type PrismicNewsCategoryConnectionDistinctArgs = {
  field: PrismicNewsCategoryFieldsEnum
}

export type PrismicNewsCategoryConnectionMaxArgs = {
  field: PrismicNewsCategoryFieldsEnum
}

export type PrismicNewsCategoryConnectionMinArgs = {
  field: PrismicNewsCategoryFieldsEnum
}

export type PrismicNewsCategoryConnectionSumArgs = {
  field: PrismicNewsCategoryFieldsEnum
}

export type PrismicNewsCategoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: PrismicNewsCategoryFieldsEnum
}

export type PrismicNewsCategoryDataType = {
  name?: Maybe<PrismicStructuredTextType>
}

export type PrismicNewsCategoryDataTypeFilterInput = {
  name?: Maybe<PrismicStructuredTextTypeFilterInput>
}

export type PrismicNewsCategoryEdge = {
  next?: Maybe<PrismicNewsCategory>
  node: PrismicNewsCategory
  previous?: Maybe<PrismicNewsCategory>
}

export enum PrismicNewsCategoryFieldsEnum {
  Uid = 'uid',
  DataNameText = 'data___name___text',
  DataNameHtml = 'data___name___html',
  DataNameRaw = 'data___name___raw',
  DataRaw = 'dataRaw',
  PrismicId = 'prismicId',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  Type = 'type',
  Url = 'url',
  Previewable = '_previewable',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicNewsCategoryFilterInput = {
  uid?: Maybe<StringQueryOperatorInput>
  data?: Maybe<PrismicNewsCategoryDataTypeFilterInput>
  dataRaw?: Maybe<JsonQueryOperatorInput>
  prismicId?: Maybe<IdQueryOperatorInput>
  alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
  first_publication_date?: Maybe<DateQueryOperatorInput>
  href?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  last_publication_date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  _previewable?: Maybe<IdQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type PrismicNewsCategoryGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicNewsCategoryEdge>
  nodes: Array<PrismicNewsCategory>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type PrismicNewsCategorySortInput = {
  fields?: Maybe<Array<Maybe<PrismicNewsCategoryFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicNewsPost = Node & {
  uid: Scalars['String']
  data?: Maybe<PrismicNewsPostDataType>
  dataRaw: Scalars['JSON']
  prismicId: Scalars['ID']
  alternate_languages: Array<PrismicAlternateLanguageType>
  first_publication_date: Scalars['Date']
  href: Scalars['String']
  lang: Scalars['String']
  last_publication_date: Scalars['Date']
  tags: Array<Scalars['String']>
  type: Scalars['String']
  url?: Maybe<Scalars['String']>
  _previewable: Scalars['ID']
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type PrismicNewsPostFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicNewsPostLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicNewsPostConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicNewsPostEdge>
  nodes: Array<PrismicNewsPost>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<PrismicNewsPostGroupConnection>
}

export type PrismicNewsPostConnectionDistinctArgs = {
  field: PrismicNewsPostFieldsEnum
}

export type PrismicNewsPostConnectionMaxArgs = {
  field: PrismicNewsPostFieldsEnum
}

export type PrismicNewsPostConnectionMinArgs = {
  field: PrismicNewsPostFieldsEnum
}

export type PrismicNewsPostConnectionSumArgs = {
  field: PrismicNewsPostFieldsEnum
}

export type PrismicNewsPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: PrismicNewsPostFieldsEnum
}

export type PrismicNewsPostDataBodyAnchor = PrismicSliceType & {
  primary?: Maybe<PrismicNewsPostDataBodyAnchorPrimary>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicNewsPostDataBodyAnchorPrimary = {
  id?: Maybe<Scalars['String']>
}

export type PrismicNewsPostDataBodyDivider = PrismicSliceType & {
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicNewsPostDataBodyImages = PrismicSliceType & {
  items?: Maybe<Array<Maybe<PrismicNewsPostDataBodyImagesItem>>>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicNewsPostDataBodyImagesItem = {
  caption?: Maybe<PrismicStructuredTextType>
  image?: Maybe<PrismicNewsPostDataBodyImagesItemsImageImageType>
}

export type PrismicNewsPostDataBodyImagesItemsImageImageType = {
  alt?: Maybe<Scalars['String']>
  copyright?: Maybe<Scalars['String']>
  dimensions?: Maybe<PrismicImageDimensionsType>
  /** A plain imgix URL with the URL and params applied. */
  url?: Maybe<Scalars['String']>
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed?: Maybe<ImgixFixed>
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid?: Maybe<ImgixFluid>
  gatsbyImageData?: Maybe<Scalars['JSON']>
  localFile?: Maybe<File>
}

export type PrismicNewsPostDataBodyImagesItemsImageImageTypeUrlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicNewsPostDataBodyImagesItemsImageImageTypeFixedArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  imgixParams?: Maybe<ImgixParamsInput>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicNewsPostDataBodyImagesItemsImageImageTypeFluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicNewsPostDataBodyImagesItemsImageImageTypeGatsbyImageDataArgs =
  {
    layout?: Maybe<GatsbyImageLayout>
    width?: Maybe<Scalars['Int']>
    height?: Maybe<Scalars['Int']>
    aspectRatio?: Maybe<Scalars['Float']>
    outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>
    breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
    sizes?: Maybe<Scalars['String']>
    backgroundColor?: Maybe<Scalars['String']>
    imgixParams?: Maybe<ImgixParamsInput>
    placeholderImgixParams?: Maybe<ImgixParamsInput>
    placeholder?: Maybe<ImgixPlaceholder>
    widthTolerance?: Maybe<Scalars['Float']>
    srcSetMinWidth?: Maybe<Scalars['Int']>
    srcSetMaxWidth?: Maybe<Scalars['Int']>
  }

export type PrismicNewsPostDataBodyLinkCard = PrismicSliceType & {
  primary?: Maybe<PrismicNewsPostDataBodyLinkCardPrimary>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicNewsPostDataBodyLinkCardPrimary = {
  link?: Maybe<PrismicLinkType>
  link_title?: Maybe<PrismicStructuredTextType>
}

export type PrismicNewsPostDataBodySlicesType =
  | PrismicNewsPostDataBodyAnchor
  | PrismicNewsPostDataBodyDivider
  | PrismicNewsPostDataBodyImages
  | PrismicNewsPostDataBodyLinkCard
  | PrismicNewsPostDataBodyText
  | PrismicNewsPostDataBodyTextIntro
  | PrismicNewsPostDataBodyVideo

export type PrismicNewsPostDataBodyText = PrismicSliceType & {
  primary?: Maybe<PrismicNewsPostDataBodyTextPrimary>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicNewsPostDataBodyTextIntro = PrismicSliceType & {
  primary?: Maybe<PrismicNewsPostDataBodyTextIntroPrimary>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicNewsPostDataBodyTextIntroPrimary = {
  introductory_text?: Maybe<PrismicStructuredTextType>
}

export type PrismicNewsPostDataBodyTextPrimary = {
  text?: Maybe<PrismicStructuredTextType>
}

export type PrismicNewsPostDataBodyVideo = PrismicSliceType & {
  primary?: Maybe<PrismicNewsPostDataBodyVideoPrimary>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicNewsPostDataBodyVideoPrimary = {
  poster?: Maybe<PrismicNewsPostDataBodyVideoPrimaryPosterImageType>
  video?: Maybe<PrismicEmbedType>
}

export type PrismicNewsPostDataBodyVideoPrimaryPosterImageType = {
  alt?: Maybe<Scalars['String']>
  copyright?: Maybe<Scalars['String']>
  dimensions?: Maybe<PrismicImageDimensionsType>
  /** A plain imgix URL with the URL and params applied. */
  url?: Maybe<Scalars['String']>
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed?: Maybe<ImgixFixed>
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid?: Maybe<ImgixFluid>
  gatsbyImageData?: Maybe<Scalars['JSON']>
  localFile?: Maybe<File>
}

export type PrismicNewsPostDataBodyVideoPrimaryPosterImageTypeUrlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicNewsPostDataBodyVideoPrimaryPosterImageTypeFixedArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  imgixParams?: Maybe<ImgixParamsInput>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicNewsPostDataBodyVideoPrimaryPosterImageTypeFluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicNewsPostDataBodyVideoPrimaryPosterImageTypeGatsbyImageDataArgs =
  {
    layout?: Maybe<GatsbyImageLayout>
    width?: Maybe<Scalars['Int']>
    height?: Maybe<Scalars['Int']>
    aspectRatio?: Maybe<Scalars['Float']>
    outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>
    breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
    sizes?: Maybe<Scalars['String']>
    backgroundColor?: Maybe<Scalars['String']>
    imgixParams?: Maybe<ImgixParamsInput>
    placeholderImgixParams?: Maybe<ImgixParamsInput>
    placeholder?: Maybe<ImgixPlaceholder>
    widthTolerance?: Maybe<Scalars['Float']>
    srcSetMinWidth?: Maybe<Scalars['Int']>
    srcSetMaxWidth?: Maybe<Scalars['Int']>
  }

export type PrismicNewsPostDataFeaturedImageImageType = {
  alt?: Maybe<Scalars['String']>
  copyright?: Maybe<Scalars['String']>
  dimensions?: Maybe<PrismicImageDimensionsType>
  /** A plain imgix URL with the URL and params applied. */
  url?: Maybe<Scalars['String']>
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed?: Maybe<ImgixFixed>
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid?: Maybe<ImgixFluid>
  gatsbyImageData?: Maybe<Scalars['JSON']>
  localFile?: Maybe<File>
}

export type PrismicNewsPostDataFeaturedImageImageTypeUrlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicNewsPostDataFeaturedImageImageTypeFixedArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  imgixParams?: Maybe<ImgixParamsInput>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicNewsPostDataFeaturedImageImageTypeFluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicNewsPostDataFeaturedImageImageTypeGatsbyImageDataArgs = {
  layout?: Maybe<GatsbyImageLayout>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  aspectRatio?: Maybe<Scalars['Float']>
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
  sizes?: Maybe<Scalars['String']>
  backgroundColor?: Maybe<Scalars['String']>
  imgixParams?: Maybe<ImgixParamsInput>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
  placeholder?: Maybe<ImgixPlaceholder>
  widthTolerance?: Maybe<Scalars['Float']>
  srcSetMinWidth?: Maybe<Scalars['Int']>
  srcSetMaxWidth?: Maybe<Scalars['Int']>
}

export type PrismicNewsPostDataFeaturedImageImageTypeFilterInput = {
  alt?: Maybe<StringQueryOperatorInput>
  copyright?: Maybe<StringQueryOperatorInput>
  dimensions?: Maybe<PrismicImageDimensionsTypeFilterInput>
  url?: Maybe<StringQueryOperatorInput>
  fixed?: Maybe<ImgixFixedFilterInput>
  fluid?: Maybe<ImgixFluidFilterInput>
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>
  localFile?: Maybe<FileFilterInput>
}

export type PrismicNewsPostDataNewsCategories = {
  news_category?: Maybe<PrismicLinkType>
}

export type PrismicNewsPostDataNewsCategoriesFilterInput = {
  news_category?: Maybe<PrismicLinkTypeFilterInput>
}

export type PrismicNewsPostDataNewsCategoriesFilterListInput = {
  elemMatch?: Maybe<PrismicNewsPostDataNewsCategoriesFilterInput>
}

export type PrismicNewsPostDataType = {
  body?: Maybe<Array<Maybe<PrismicNewsPostDataBodySlicesType>>>
  excerpt?: Maybe<PrismicStructuredTextType>
  featured_image?: Maybe<PrismicNewsPostDataFeaturedImageImageType>
  news_categories?: Maybe<Array<Maybe<PrismicNewsPostDataNewsCategories>>>
  published_at?: Maybe<Scalars['Date']>
  title?: Maybe<PrismicStructuredTextType>
}

export type PrismicNewsPostDataTypePublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicNewsPostDataTypeFilterInput = {
  excerpt?: Maybe<PrismicStructuredTextTypeFilterInput>
  featured_image?: Maybe<PrismicNewsPostDataFeaturedImageImageTypeFilterInput>
  news_categories?: Maybe<PrismicNewsPostDataNewsCategoriesFilterListInput>
  published_at?: Maybe<DateQueryOperatorInput>
  title?: Maybe<PrismicStructuredTextTypeFilterInput>
}

export type PrismicNewsPostEdge = {
  next?: Maybe<PrismicNewsPost>
  node: PrismicNewsPost
  previous?: Maybe<PrismicNewsPost>
}

export enum PrismicNewsPostFieldsEnum {
  Uid = 'uid',
  DataExcerptText = 'data___excerpt___text',
  DataExcerptHtml = 'data___excerpt___html',
  DataExcerptRaw = 'data___excerpt___raw',
  DataFeaturedImageAlt = 'data___featured_image___alt',
  DataFeaturedImageCopyright = 'data___featured_image___copyright',
  DataFeaturedImageDimensionsWidth = 'data___featured_image___dimensions___width',
  DataFeaturedImageDimensionsHeight = 'data___featured_image___dimensions___height',
  DataFeaturedImageUrl = 'data___featured_image___url',
  DataFeaturedImageFixedBase64 = 'data___featured_image___fixed___base64',
  DataFeaturedImageFixedSrc = 'data___featured_image___fixed___src',
  DataFeaturedImageFixedSrcSet = 'data___featured_image___fixed___srcSet',
  DataFeaturedImageFixedSrcWebp = 'data___featured_image___fixed___srcWebp',
  DataFeaturedImageFixedSrcSetWebp = 'data___featured_image___fixed___srcSetWebp',
  DataFeaturedImageFixedSizes = 'data___featured_image___fixed___sizes',
  DataFeaturedImageFixedWidth = 'data___featured_image___fixed___width',
  DataFeaturedImageFixedHeight = 'data___featured_image___fixed___height',
  DataFeaturedImageFluidBase64 = 'data___featured_image___fluid___base64',
  DataFeaturedImageFluidSrc = 'data___featured_image___fluid___src',
  DataFeaturedImageFluidSrcSet = 'data___featured_image___fluid___srcSet',
  DataFeaturedImageFluidSrcWebp = 'data___featured_image___fluid___srcWebp',
  DataFeaturedImageFluidSrcSetWebp = 'data___featured_image___fluid___srcSetWebp',
  DataFeaturedImageFluidSizes = 'data___featured_image___fluid___sizes',
  DataFeaturedImageFluidAspectRatio = 'data___featured_image___fluid___aspectRatio',
  DataFeaturedImageGatsbyImageData = 'data___featured_image___gatsbyImageData',
  DataFeaturedImageLocalFileSourceInstanceName = 'data___featured_image___localFile___sourceInstanceName',
  DataFeaturedImageLocalFileAbsolutePath = 'data___featured_image___localFile___absolutePath',
  DataFeaturedImageLocalFileRelativePath = 'data___featured_image___localFile___relativePath',
  DataFeaturedImageLocalFileExtension = 'data___featured_image___localFile___extension',
  DataFeaturedImageLocalFileSize = 'data___featured_image___localFile___size',
  DataFeaturedImageLocalFilePrettySize = 'data___featured_image___localFile___prettySize',
  DataFeaturedImageLocalFileModifiedTime = 'data___featured_image___localFile___modifiedTime',
  DataFeaturedImageLocalFileAccessTime = 'data___featured_image___localFile___accessTime',
  DataFeaturedImageLocalFileChangeTime = 'data___featured_image___localFile___changeTime',
  DataFeaturedImageLocalFileBirthTime = 'data___featured_image___localFile___birthTime',
  DataFeaturedImageLocalFileRoot = 'data___featured_image___localFile___root',
  DataFeaturedImageLocalFileDir = 'data___featured_image___localFile___dir',
  DataFeaturedImageLocalFileBase = 'data___featured_image___localFile___base',
  DataFeaturedImageLocalFileExt = 'data___featured_image___localFile___ext',
  DataFeaturedImageLocalFileName = 'data___featured_image___localFile___name',
  DataFeaturedImageLocalFileRelativeDirectory = 'data___featured_image___localFile___relativeDirectory',
  DataFeaturedImageLocalFileDev = 'data___featured_image___localFile___dev',
  DataFeaturedImageLocalFileMode = 'data___featured_image___localFile___mode',
  DataFeaturedImageLocalFileNlink = 'data___featured_image___localFile___nlink',
  DataFeaturedImageLocalFileUid = 'data___featured_image___localFile___uid',
  DataFeaturedImageLocalFileGid = 'data___featured_image___localFile___gid',
  DataFeaturedImageLocalFileRdev = 'data___featured_image___localFile___rdev',
  DataFeaturedImageLocalFileIno = 'data___featured_image___localFile___ino',
  DataFeaturedImageLocalFileAtimeMs = 'data___featured_image___localFile___atimeMs',
  DataFeaturedImageLocalFileMtimeMs = 'data___featured_image___localFile___mtimeMs',
  DataFeaturedImageLocalFileCtimeMs = 'data___featured_image___localFile___ctimeMs',
  DataFeaturedImageLocalFileAtime = 'data___featured_image___localFile___atime',
  DataFeaturedImageLocalFileMtime = 'data___featured_image___localFile___mtime',
  DataFeaturedImageLocalFileCtime = 'data___featured_image___localFile___ctime',
  DataFeaturedImageLocalFileBirthtime = 'data___featured_image___localFile___birthtime',
  DataFeaturedImageLocalFileBirthtimeMs = 'data___featured_image___localFile___birthtimeMs',
  DataFeaturedImageLocalFileId = 'data___featured_image___localFile___id',
  DataFeaturedImageLocalFileChildren = 'data___featured_image___localFile___children',
  DataNewsCategories = 'data___news_categories',
  DataNewsCategoriesNewsCategoryLinkType = 'data___news_categories___news_category___link_type',
  DataNewsCategoriesNewsCategoryIsBroken = 'data___news_categories___news_category___isBroken',
  DataNewsCategoriesNewsCategoryUrl = 'data___news_categories___news_category___url',
  DataNewsCategoriesNewsCategoryTarget = 'data___news_categories___news_category___target',
  DataNewsCategoriesNewsCategorySize = 'data___news_categories___news_category___size',
  DataNewsCategoriesNewsCategoryId = 'data___news_categories___news_category___id',
  DataNewsCategoriesNewsCategoryType = 'data___news_categories___news_category___type',
  DataNewsCategoriesNewsCategoryTags = 'data___news_categories___news_category___tags',
  DataNewsCategoriesNewsCategoryLang = 'data___news_categories___news_category___lang',
  DataNewsCategoriesNewsCategorySlug = 'data___news_categories___news_category___slug',
  DataNewsCategoriesNewsCategoryUid = 'data___news_categories___news_category___uid',
  DataNewsCategoriesNewsCategoryRaw = 'data___news_categories___news_category___raw',
  DataPublishedAt = 'data___published_at',
  DataTitleText = 'data___title___text',
  DataTitleHtml = 'data___title___html',
  DataTitleRaw = 'data___title___raw',
  DataRaw = 'dataRaw',
  PrismicId = 'prismicId',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  Type = 'type',
  Url = 'url',
  Previewable = '_previewable',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicNewsPostFilterInput = {
  uid?: Maybe<StringQueryOperatorInput>
  data?: Maybe<PrismicNewsPostDataTypeFilterInput>
  dataRaw?: Maybe<JsonQueryOperatorInput>
  prismicId?: Maybe<IdQueryOperatorInput>
  alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
  first_publication_date?: Maybe<DateQueryOperatorInput>
  href?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  last_publication_date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  _previewable?: Maybe<IdQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type PrismicNewsPostGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicNewsPostEdge>
  nodes: Array<PrismicNewsPost>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type PrismicNewsPostSortInput = {
  fields?: Maybe<Array<Maybe<PrismicNewsPostFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicPage = Node & {
  uid: Scalars['String']
  data?: Maybe<PrismicPageDataType>
  dataRaw: Scalars['JSON']
  prismicId: Scalars['ID']
  alternate_languages: Array<PrismicAlternateLanguageType>
  first_publication_date: Scalars['Date']
  href: Scalars['String']
  lang: Scalars['String']
  last_publication_date: Scalars['Date']
  tags: Array<Scalars['String']>
  type: Scalars['String']
  url?: Maybe<Scalars['String']>
  _previewable: Scalars['ID']
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type PrismicPageFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicPageLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicPageConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicPageEdge>
  nodes: Array<PrismicPage>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<PrismicPageGroupConnection>
}

export type PrismicPageConnectionDistinctArgs = {
  field: PrismicPageFieldsEnum
}

export type PrismicPageConnectionMaxArgs = {
  field: PrismicPageFieldsEnum
}

export type PrismicPageConnectionMinArgs = {
  field: PrismicPageFieldsEnum
}

export type PrismicPageConnectionSumArgs = {
  field: PrismicPageFieldsEnum
}

export type PrismicPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: PrismicPageFieldsEnum
}

export type PrismicPageDataBodyAnchor = PrismicSliceType & {
  primary?: Maybe<PrismicPageDataBodyAnchorPrimary>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicPageDataBodyAnchorPrimary = {
  id?: Maybe<Scalars['String']>
}

export type PrismicPageDataBodyCallsToAction = PrismicSliceType & {
  items?: Maybe<Array<Maybe<PrismicPageDataBodyCallsToActionItem>>>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicPageDataBodyCallsToActionItem = {
  background_image?: Maybe<PrismicPageDataBodyCallsToActionItemsBackgroundImageImageType>
  button_link?: Maybe<PrismicLinkType>
  button_text?: Maybe<PrismicStructuredTextType>
  label?: Maybe<PrismicStructuredTextType>
  text?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataBodyCallsToActionItemsBackgroundImageImageType = {
  alt?: Maybe<Scalars['String']>
  copyright?: Maybe<Scalars['String']>
  dimensions?: Maybe<PrismicImageDimensionsType>
  /** A plain imgix URL with the URL and params applied. */
  url?: Maybe<Scalars['String']>
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed?: Maybe<ImgixFixed>
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid?: Maybe<ImgixFluid>
  gatsbyImageData?: Maybe<Scalars['JSON']>
  localFile?: Maybe<File>
}

export type PrismicPageDataBodyCallsToActionItemsBackgroundImageImageTypeUrlArgs =
  {
    imgixParams?: Maybe<ImgixParamsInput>
  }

export type PrismicPageDataBodyCallsToActionItemsBackgroundImageImageTypeFixedArgs =
  {
    width?: Maybe<Scalars['Int']>
    height?: Maybe<Scalars['Int']>
    quality?: Maybe<Scalars['Int']>
    imgixParams?: Maybe<ImgixParamsInput>
    placeholderImgixParams?: Maybe<ImgixParamsInput>
  }

export type PrismicPageDataBodyCallsToActionItemsBackgroundImageImageTypeFluidArgs =
  {
    imgixParams?: Maybe<ImgixParamsInput>
    maxWidth?: Maybe<Scalars['Int']>
    maxHeight?: Maybe<Scalars['Int']>
    srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
    placeholderImgixParams?: Maybe<ImgixParamsInput>
  }

export type PrismicPageDataBodyCallsToActionItemsBackgroundImageImageTypeGatsbyImageDataArgs =
  {
    layout?: Maybe<GatsbyImageLayout>
    width?: Maybe<Scalars['Int']>
    height?: Maybe<Scalars['Int']>
    aspectRatio?: Maybe<Scalars['Float']>
    outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>
    breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
    sizes?: Maybe<Scalars['String']>
    backgroundColor?: Maybe<Scalars['String']>
    imgixParams?: Maybe<ImgixParamsInput>
    placeholderImgixParams?: Maybe<ImgixParamsInput>
    placeholder?: Maybe<ImgixPlaceholder>
    widthTolerance?: Maybe<Scalars['Float']>
    srcSetMinWidth?: Maybe<Scalars['Int']>
    srcSetMaxWidth?: Maybe<Scalars['Int']>
  }

export type PrismicPageDataBodyFellowsGrid = PrismicSliceType & {
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicPageDataBodyHeadshotQuote = PrismicSliceType & {
  primary?: Maybe<PrismicPageDataBodyHeadshotQuotePrimary>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicPageDataBodyHeadshotQuotePrimary = {
  button_link?: Maybe<PrismicLinkType>
  button_text?: Maybe<PrismicStructuredTextType>
  credit?: Maybe<PrismicStructuredTextType>
  photo?: Maybe<PrismicPageDataBodyHeadshotQuotePrimaryPhotoImageType>
  quote?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataBodyHeadshotQuotePrimaryPhotoImageType = {
  alt?: Maybe<Scalars['String']>
  copyright?: Maybe<Scalars['String']>
  dimensions?: Maybe<PrismicImageDimensionsType>
  /** A plain imgix URL with the URL and params applied. */
  url?: Maybe<Scalars['String']>
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed?: Maybe<ImgixFixed>
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid?: Maybe<ImgixFluid>
  gatsbyImageData?: Maybe<Scalars['JSON']>
  localFile?: Maybe<File>
}

export type PrismicPageDataBodyHeadshotQuotePrimaryPhotoImageTypeUrlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicPageDataBodyHeadshotQuotePrimaryPhotoImageTypeFixedArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  imgixParams?: Maybe<ImgixParamsInput>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicPageDataBodyHeadshotQuotePrimaryPhotoImageTypeFluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicPageDataBodyHeadshotQuotePrimaryPhotoImageTypeGatsbyImageDataArgs =
  {
    layout?: Maybe<GatsbyImageLayout>
    width?: Maybe<Scalars['Int']>
    height?: Maybe<Scalars['Int']>
    aspectRatio?: Maybe<Scalars['Float']>
    outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>
    breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
    sizes?: Maybe<Scalars['String']>
    backgroundColor?: Maybe<Scalars['String']>
    imgixParams?: Maybe<ImgixParamsInput>
    placeholderImgixParams?: Maybe<ImgixParamsInput>
    placeholder?: Maybe<ImgixPlaceholder>
    widthTolerance?: Maybe<Scalars['Float']>
    srcSetMinWidth?: Maybe<Scalars['Int']>
    srcSetMaxWidth?: Maybe<Scalars['Int']>
  }

export type PrismicPageDataBodyHeroImage = PrismicSliceType & {
  primary?: Maybe<PrismicPageDataBodyHeroImagePrimary>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicPageDataBodyHeroImageCarousel = PrismicSliceType & {
  items?: Maybe<Array<Maybe<PrismicPageDataBodyHeroImageCarouselItem>>>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicPageDataBodyHeroImageCarouselItem = {
  background_image?: Maybe<PrismicPageDataBodyHeroImageCarouselItemsBackgroundImageImageType>
  button_link?: Maybe<PrismicLinkType>
  button_text?: Maybe<PrismicStructuredTextType>
  text?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataBodyHeroImageCarouselItemsBackgroundImageImageType =
  {
    alt?: Maybe<Scalars['String']>
    copyright?: Maybe<Scalars['String']>
    dimensions?: Maybe<PrismicImageDimensionsType>
    /** A plain imgix URL with the URL and params applied. */
    url?: Maybe<Scalars['String']>
    /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
    fixed?: Maybe<ImgixFixed>
    /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
    fluid?: Maybe<ImgixFluid>
    gatsbyImageData?: Maybe<Scalars['JSON']>
    localFile?: Maybe<File>
  }

export type PrismicPageDataBodyHeroImageCarouselItemsBackgroundImageImageTypeUrlArgs =
  {
    imgixParams?: Maybe<ImgixParamsInput>
  }

export type PrismicPageDataBodyHeroImageCarouselItemsBackgroundImageImageTypeFixedArgs =
  {
    width?: Maybe<Scalars['Int']>
    height?: Maybe<Scalars['Int']>
    quality?: Maybe<Scalars['Int']>
    imgixParams?: Maybe<ImgixParamsInput>
    placeholderImgixParams?: Maybe<ImgixParamsInput>
  }

export type PrismicPageDataBodyHeroImageCarouselItemsBackgroundImageImageTypeFluidArgs =
  {
    imgixParams?: Maybe<ImgixParamsInput>
    maxWidth?: Maybe<Scalars['Int']>
    maxHeight?: Maybe<Scalars['Int']>
    srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
    placeholderImgixParams?: Maybe<ImgixParamsInput>
  }

export type PrismicPageDataBodyHeroImageCarouselItemsBackgroundImageImageTypeGatsbyImageDataArgs =
  {
    layout?: Maybe<GatsbyImageLayout>
    width?: Maybe<Scalars['Int']>
    height?: Maybe<Scalars['Int']>
    aspectRatio?: Maybe<Scalars['Float']>
    outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>
    breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
    sizes?: Maybe<Scalars['String']>
    backgroundColor?: Maybe<Scalars['String']>
    imgixParams?: Maybe<ImgixParamsInput>
    placeholderImgixParams?: Maybe<ImgixParamsInput>
    placeholder?: Maybe<ImgixPlaceholder>
    widthTolerance?: Maybe<Scalars['Float']>
    srcSetMinWidth?: Maybe<Scalars['Int']>
    srcSetMaxWidth?: Maybe<Scalars['Int']>
  }

export type PrismicPageDataBodyHeroImagePrimary = {
  background_image?: Maybe<PrismicPageDataBodyHeroImagePrimaryBackgroundImageImageType>
  button_link?: Maybe<PrismicLinkType>
  button_text?: Maybe<PrismicStructuredTextType>
  text?: Maybe<PrismicStructuredTextType>
  variant?: Maybe<Scalars['String']>
}

export type PrismicPageDataBodyHeroImagePrimaryBackgroundImageImageType = {
  alt?: Maybe<Scalars['String']>
  copyright?: Maybe<Scalars['String']>
  dimensions?: Maybe<PrismicImageDimensionsType>
  /** A plain imgix URL with the URL and params applied. */
  url?: Maybe<Scalars['String']>
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed?: Maybe<ImgixFixed>
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid?: Maybe<ImgixFluid>
  gatsbyImageData?: Maybe<Scalars['JSON']>
  localFile?: Maybe<File>
}

export type PrismicPageDataBodyHeroImagePrimaryBackgroundImageImageTypeUrlArgs =
  {
    imgixParams?: Maybe<ImgixParamsInput>
  }

export type PrismicPageDataBodyHeroImagePrimaryBackgroundImageImageTypeFixedArgs =
  {
    width?: Maybe<Scalars['Int']>
    height?: Maybe<Scalars['Int']>
    quality?: Maybe<Scalars['Int']>
    imgixParams?: Maybe<ImgixParamsInput>
    placeholderImgixParams?: Maybe<ImgixParamsInput>
  }

export type PrismicPageDataBodyHeroImagePrimaryBackgroundImageImageTypeFluidArgs =
  {
    imgixParams?: Maybe<ImgixParamsInput>
    maxWidth?: Maybe<Scalars['Int']>
    maxHeight?: Maybe<Scalars['Int']>
    srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
    placeholderImgixParams?: Maybe<ImgixParamsInput>
  }

export type PrismicPageDataBodyHeroImagePrimaryBackgroundImageImageTypeGatsbyImageDataArgs =
  {
    layout?: Maybe<GatsbyImageLayout>
    width?: Maybe<Scalars['Int']>
    height?: Maybe<Scalars['Int']>
    aspectRatio?: Maybe<Scalars['Float']>
    outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>
    breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
    sizes?: Maybe<Scalars['String']>
    backgroundColor?: Maybe<Scalars['String']>
    imgixParams?: Maybe<ImgixParamsInput>
    placeholderImgixParams?: Maybe<ImgixParamsInput>
    placeholder?: Maybe<ImgixPlaceholder>
    widthTolerance?: Maybe<Scalars['Float']>
    srcSetMinWidth?: Maybe<Scalars['Int']>
    srcSetMaxWidth?: Maybe<Scalars['Int']>
  }

export type PrismicPageDataBodyImageCarousel = PrismicSliceType & {
  items?: Maybe<Array<Maybe<PrismicPageDataBodyImageCarouselItem>>>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicPageDataBodyImageCarouselItem = {
  caption?: Maybe<PrismicStructuredTextType>
  image?: Maybe<PrismicPageDataBodyImageCarouselItemsImageImageType>
}

export type PrismicPageDataBodyImageCarouselItemsImageImageType = {
  alt?: Maybe<Scalars['String']>
  copyright?: Maybe<Scalars['String']>
  dimensions?: Maybe<PrismicImageDimensionsType>
  /** A plain imgix URL with the URL and params applied. */
  url?: Maybe<Scalars['String']>
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed?: Maybe<ImgixFixed>
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid?: Maybe<ImgixFluid>
  gatsbyImageData?: Maybe<Scalars['JSON']>
  localFile?: Maybe<File>
}

export type PrismicPageDataBodyImageCarouselItemsImageImageTypeUrlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicPageDataBodyImageCarouselItemsImageImageTypeFixedArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  imgixParams?: Maybe<ImgixParamsInput>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicPageDataBodyImageCarouselItemsImageImageTypeFluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicPageDataBodyImageCarouselItemsImageImageTypeGatsbyImageDataArgs =
  {
    layout?: Maybe<GatsbyImageLayout>
    width?: Maybe<Scalars['Int']>
    height?: Maybe<Scalars['Int']>
    aspectRatio?: Maybe<Scalars['Float']>
    outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>
    breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
    sizes?: Maybe<Scalars['String']>
    backgroundColor?: Maybe<Scalars['String']>
    imgixParams?: Maybe<ImgixParamsInput>
    placeholderImgixParams?: Maybe<ImgixParamsInput>
    placeholder?: Maybe<ImgixPlaceholder>
    widthTolerance?: Maybe<Scalars['Float']>
    srcSetMinWidth?: Maybe<Scalars['Int']>
    srcSetMaxWidth?: Maybe<Scalars['Int']>
  }

export type PrismicPageDataBodyLearningExcursionMap = PrismicSliceType & {
  primary?: Maybe<PrismicPageDataBodyLearningExcursionMapPrimary>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicPageDataBodyLearningExcursionMapPrimary = {
  map_url?: Maybe<Scalars['String']>
}

export type PrismicPageDataBodyLinkCollection = PrismicSliceType & {
  items?: Maybe<Array<Maybe<PrismicPageDataBodyLinkCollectionItem>>>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicPageDataBodyLinkCollectionItem = {
  button_text?: Maybe<PrismicStructuredTextType>
  description?: Maybe<PrismicStructuredTextType>
  link?: Maybe<PrismicLinkType>
  name?: Maybe<PrismicStructuredTextType>
  thumbnail?: Maybe<PrismicPageDataBodyLinkCollectionItemsThumbnailImageType>
}

export type PrismicPageDataBodyLinkCollectionItemsThumbnailImageType = {
  alt?: Maybe<Scalars['String']>
  copyright?: Maybe<Scalars['String']>
  dimensions?: Maybe<PrismicImageDimensionsType>
  /** A plain imgix URL with the URL and params applied. */
  url?: Maybe<Scalars['String']>
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed?: Maybe<ImgixFixed>
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid?: Maybe<ImgixFluid>
  gatsbyImageData?: Maybe<Scalars['JSON']>
  localFile?: Maybe<File>
}

export type PrismicPageDataBodyLinkCollectionItemsThumbnailImageTypeUrlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicPageDataBodyLinkCollectionItemsThumbnailImageTypeFixedArgs =
  {
    width?: Maybe<Scalars['Int']>
    height?: Maybe<Scalars['Int']>
    quality?: Maybe<Scalars['Int']>
    imgixParams?: Maybe<ImgixParamsInput>
    placeholderImgixParams?: Maybe<ImgixParamsInput>
  }

export type PrismicPageDataBodyLinkCollectionItemsThumbnailImageTypeFluidArgs =
  {
    imgixParams?: Maybe<ImgixParamsInput>
    maxWidth?: Maybe<Scalars['Int']>
    maxHeight?: Maybe<Scalars['Int']>
    srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
    placeholderImgixParams?: Maybe<ImgixParamsInput>
  }

export type PrismicPageDataBodyLinkCollectionItemsThumbnailImageTypeGatsbyImageDataArgs =
  {
    layout?: Maybe<GatsbyImageLayout>
    width?: Maybe<Scalars['Int']>
    height?: Maybe<Scalars['Int']>
    aspectRatio?: Maybe<Scalars['Float']>
    outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>
    breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
    sizes?: Maybe<Scalars['String']>
    backgroundColor?: Maybe<Scalars['String']>
    imgixParams?: Maybe<ImgixParamsInput>
    placeholderImgixParams?: Maybe<ImgixParamsInput>
    placeholder?: Maybe<ImgixPlaceholder>
    widthTolerance?: Maybe<Scalars['Float']>
    srcSetMinWidth?: Maybe<Scalars['Int']>
    srcSetMaxWidth?: Maybe<Scalars['Int']>
  }

export type PrismicPageDataBodyQuoteSlideshow = PrismicSliceType & {
  items?: Maybe<Array<Maybe<PrismicPageDataBodyQuoteSlideshowItem>>>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicPageDataBodyQuoteSlideshowItem = {
  photo?: Maybe<PrismicPageDataBodyQuoteSlideshowItemsPhotoImageType>
  quote?: Maybe<PrismicStructuredTextType>
  quotee_name?: Maybe<PrismicStructuredTextType>
  quotee_title?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataBodyQuoteSlideshowItemsPhotoImageType = {
  alt?: Maybe<Scalars['String']>
  copyright?: Maybe<Scalars['String']>
  dimensions?: Maybe<PrismicImageDimensionsType>
  /** A plain imgix URL with the URL and params applied. */
  url?: Maybe<Scalars['String']>
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed?: Maybe<ImgixFixed>
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid?: Maybe<ImgixFluid>
  gatsbyImageData?: Maybe<Scalars['JSON']>
  localFile?: Maybe<File>
}

export type PrismicPageDataBodyQuoteSlideshowItemsPhotoImageTypeUrlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicPageDataBodyQuoteSlideshowItemsPhotoImageTypeFixedArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  imgixParams?: Maybe<ImgixParamsInput>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicPageDataBodyQuoteSlideshowItemsPhotoImageTypeFluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicPageDataBodyQuoteSlideshowItemsPhotoImageTypeGatsbyImageDataArgs =
  {
    layout?: Maybe<GatsbyImageLayout>
    width?: Maybe<Scalars['Int']>
    height?: Maybe<Scalars['Int']>
    aspectRatio?: Maybe<Scalars['Float']>
    outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>
    breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
    sizes?: Maybe<Scalars['String']>
    backgroundColor?: Maybe<Scalars['String']>
    imgixParams?: Maybe<ImgixParamsInput>
    placeholderImgixParams?: Maybe<ImgixParamsInput>
    placeholder?: Maybe<ImgixPlaceholder>
    widthTolerance?: Maybe<Scalars['Float']>
    srcSetMinWidth?: Maybe<Scalars['Int']>
    srcSetMaxWidth?: Maybe<Scalars['Int']>
  }

export type PrismicPageDataBodySlicesType =
  | PrismicPageDataBodyAnchor
  | PrismicPageDataBodyCallsToAction
  | PrismicPageDataBodyFellowsGrid
  | PrismicPageDataBodyHeadshotQuote
  | PrismicPageDataBodyHeroImage
  | PrismicPageDataBodyHeroImageCarousel
  | PrismicPageDataBodyImageCarousel
  | PrismicPageDataBodyLearningExcursionMap
  | PrismicPageDataBodyLinkCollection
  | PrismicPageDataBodyQuoteSlideshow
  | PrismicPageDataBodyText

export type PrismicPageDataBodyText = PrismicSliceType & {
  primary?: Maybe<PrismicPageDataBodyTextPrimary>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicPageDataBodyTextPrimary = {
  text?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataType = {
  body?: Maybe<Array<Maybe<PrismicPageDataBodySlicesType>>>
  meta_description?: Maybe<Scalars['String']>
  meta_title?: Maybe<Scalars['String']>
  parent?: Maybe<PrismicLinkType>
  redirect_is_permanent?: Maybe<Scalars['Boolean']>
  redirect_to?: Maybe<PrismicLinkType>
  title?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageDataTypeFilterInput = {
  meta_description?: Maybe<StringQueryOperatorInput>
  meta_title?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<PrismicLinkTypeFilterInput>
  redirect_is_permanent?: Maybe<BooleanQueryOperatorInput>
  redirect_to?: Maybe<PrismicLinkTypeFilterInput>
  title?: Maybe<PrismicStructuredTextTypeFilterInput>
}

export type PrismicPageEdge = {
  next?: Maybe<PrismicPage>
  node: PrismicPage
  previous?: Maybe<PrismicPage>
}

export enum PrismicPageFieldsEnum {
  Uid = 'uid',
  DataMetaDescription = 'data___meta_description',
  DataMetaTitle = 'data___meta_title',
  DataParentLinkType = 'data___parent___link_type',
  DataParentIsBroken = 'data___parent___isBroken',
  DataParentUrl = 'data___parent___url',
  DataParentTarget = 'data___parent___target',
  DataParentSize = 'data___parent___size',
  DataParentId = 'data___parent___id',
  DataParentType = 'data___parent___type',
  DataParentTags = 'data___parent___tags',
  DataParentLang = 'data___parent___lang',
  DataParentSlug = 'data___parent___slug',
  DataParentUid = 'data___parent___uid',
  DataParentLocalFileSourceInstanceName = 'data___parent___localFile___sourceInstanceName',
  DataParentLocalFileAbsolutePath = 'data___parent___localFile___absolutePath',
  DataParentLocalFileRelativePath = 'data___parent___localFile___relativePath',
  DataParentLocalFileExtension = 'data___parent___localFile___extension',
  DataParentLocalFileSize = 'data___parent___localFile___size',
  DataParentLocalFilePrettySize = 'data___parent___localFile___prettySize',
  DataParentLocalFileModifiedTime = 'data___parent___localFile___modifiedTime',
  DataParentLocalFileAccessTime = 'data___parent___localFile___accessTime',
  DataParentLocalFileChangeTime = 'data___parent___localFile___changeTime',
  DataParentLocalFileBirthTime = 'data___parent___localFile___birthTime',
  DataParentLocalFileRoot = 'data___parent___localFile___root',
  DataParentLocalFileDir = 'data___parent___localFile___dir',
  DataParentLocalFileBase = 'data___parent___localFile___base',
  DataParentLocalFileExt = 'data___parent___localFile___ext',
  DataParentLocalFileName = 'data___parent___localFile___name',
  DataParentLocalFileRelativeDirectory = 'data___parent___localFile___relativeDirectory',
  DataParentLocalFileDev = 'data___parent___localFile___dev',
  DataParentLocalFileMode = 'data___parent___localFile___mode',
  DataParentLocalFileNlink = 'data___parent___localFile___nlink',
  DataParentLocalFileUid = 'data___parent___localFile___uid',
  DataParentLocalFileGid = 'data___parent___localFile___gid',
  DataParentLocalFileRdev = 'data___parent___localFile___rdev',
  DataParentLocalFileIno = 'data___parent___localFile___ino',
  DataParentLocalFileAtimeMs = 'data___parent___localFile___atimeMs',
  DataParentLocalFileMtimeMs = 'data___parent___localFile___mtimeMs',
  DataParentLocalFileCtimeMs = 'data___parent___localFile___ctimeMs',
  DataParentLocalFileAtime = 'data___parent___localFile___atime',
  DataParentLocalFileMtime = 'data___parent___localFile___mtime',
  DataParentLocalFileCtime = 'data___parent___localFile___ctime',
  DataParentLocalFileBirthtime = 'data___parent___localFile___birthtime',
  DataParentLocalFileBirthtimeMs = 'data___parent___localFile___birthtimeMs',
  DataParentLocalFileId = 'data___parent___localFile___id',
  DataParentLocalFileChildren = 'data___parent___localFile___children',
  DataParentRaw = 'data___parent___raw',
  DataRedirectIsPermanent = 'data___redirect_is_permanent',
  DataRedirectToLinkType = 'data___redirect_to___link_type',
  DataRedirectToIsBroken = 'data___redirect_to___isBroken',
  DataRedirectToUrl = 'data___redirect_to___url',
  DataRedirectToTarget = 'data___redirect_to___target',
  DataRedirectToSize = 'data___redirect_to___size',
  DataRedirectToId = 'data___redirect_to___id',
  DataRedirectToType = 'data___redirect_to___type',
  DataRedirectToTags = 'data___redirect_to___tags',
  DataRedirectToLang = 'data___redirect_to___lang',
  DataRedirectToSlug = 'data___redirect_to___slug',
  DataRedirectToUid = 'data___redirect_to___uid',
  DataRedirectToLocalFileSourceInstanceName = 'data___redirect_to___localFile___sourceInstanceName',
  DataRedirectToLocalFileAbsolutePath = 'data___redirect_to___localFile___absolutePath',
  DataRedirectToLocalFileRelativePath = 'data___redirect_to___localFile___relativePath',
  DataRedirectToLocalFileExtension = 'data___redirect_to___localFile___extension',
  DataRedirectToLocalFileSize = 'data___redirect_to___localFile___size',
  DataRedirectToLocalFilePrettySize = 'data___redirect_to___localFile___prettySize',
  DataRedirectToLocalFileModifiedTime = 'data___redirect_to___localFile___modifiedTime',
  DataRedirectToLocalFileAccessTime = 'data___redirect_to___localFile___accessTime',
  DataRedirectToLocalFileChangeTime = 'data___redirect_to___localFile___changeTime',
  DataRedirectToLocalFileBirthTime = 'data___redirect_to___localFile___birthTime',
  DataRedirectToLocalFileRoot = 'data___redirect_to___localFile___root',
  DataRedirectToLocalFileDir = 'data___redirect_to___localFile___dir',
  DataRedirectToLocalFileBase = 'data___redirect_to___localFile___base',
  DataRedirectToLocalFileExt = 'data___redirect_to___localFile___ext',
  DataRedirectToLocalFileName = 'data___redirect_to___localFile___name',
  DataRedirectToLocalFileRelativeDirectory = 'data___redirect_to___localFile___relativeDirectory',
  DataRedirectToLocalFileDev = 'data___redirect_to___localFile___dev',
  DataRedirectToLocalFileMode = 'data___redirect_to___localFile___mode',
  DataRedirectToLocalFileNlink = 'data___redirect_to___localFile___nlink',
  DataRedirectToLocalFileUid = 'data___redirect_to___localFile___uid',
  DataRedirectToLocalFileGid = 'data___redirect_to___localFile___gid',
  DataRedirectToLocalFileRdev = 'data___redirect_to___localFile___rdev',
  DataRedirectToLocalFileIno = 'data___redirect_to___localFile___ino',
  DataRedirectToLocalFileAtimeMs = 'data___redirect_to___localFile___atimeMs',
  DataRedirectToLocalFileMtimeMs = 'data___redirect_to___localFile___mtimeMs',
  DataRedirectToLocalFileCtimeMs = 'data___redirect_to___localFile___ctimeMs',
  DataRedirectToLocalFileAtime = 'data___redirect_to___localFile___atime',
  DataRedirectToLocalFileMtime = 'data___redirect_to___localFile___mtime',
  DataRedirectToLocalFileCtime = 'data___redirect_to___localFile___ctime',
  DataRedirectToLocalFileBirthtime = 'data___redirect_to___localFile___birthtime',
  DataRedirectToLocalFileBirthtimeMs = 'data___redirect_to___localFile___birthtimeMs',
  DataRedirectToLocalFileId = 'data___redirect_to___localFile___id',
  DataRedirectToLocalFileChildren = 'data___redirect_to___localFile___children',
  DataRedirectToRaw = 'data___redirect_to___raw',
  DataTitleText = 'data___title___text',
  DataTitleHtml = 'data___title___html',
  DataTitleRaw = 'data___title___raw',
  DataRaw = 'dataRaw',
  PrismicId = 'prismicId',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  Type = 'type',
  Url = 'url',
  Previewable = '_previewable',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicPageFilterInput = {
  uid?: Maybe<StringQueryOperatorInput>
  data?: Maybe<PrismicPageDataTypeFilterInput>
  dataRaw?: Maybe<JsonQueryOperatorInput>
  prismicId?: Maybe<IdQueryOperatorInput>
  alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
  first_publication_date?: Maybe<DateQueryOperatorInput>
  href?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  last_publication_date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  _previewable?: Maybe<IdQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type PrismicPageGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicPageEdge>
  nodes: Array<PrismicPage>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type PrismicPageSortInput = {
  fields?: Maybe<Array<Maybe<PrismicPageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicProject = Node & {
  uid: Scalars['String']
  data?: Maybe<PrismicProjectDataType>
  dataRaw: Scalars['JSON']
  prismicId: Scalars['ID']
  alternate_languages: Array<PrismicAlternateLanguageType>
  first_publication_date: Scalars['Date']
  href: Scalars['String']
  lang: Scalars['String']
  last_publication_date: Scalars['Date']
  tags: Array<Scalars['String']>
  type: Scalars['String']
  url?: Maybe<Scalars['String']>
  _previewable: Scalars['ID']
  /** Title field with accents and ʻokinas removed. */
  _ON_BUILD_ONLY_normalized_title?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type PrismicProjectFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicProjectLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicProjectCategory = Node & {
  uid: Scalars['String']
  data?: Maybe<PrismicProjectCategoryDataType>
  dataRaw: Scalars['JSON']
  prismicId: Scalars['ID']
  alternate_languages: Array<PrismicAlternateLanguageType>
  first_publication_date: Scalars['Date']
  href: Scalars['String']
  lang: Scalars['String']
  last_publication_date: Scalars['Date']
  tags: Array<Scalars['String']>
  type: Scalars['String']
  url?: Maybe<Scalars['String']>
  _previewable: Scalars['ID']
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type PrismicProjectCategoryFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicProjectCategoryLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicProjectCategoryConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicProjectCategoryEdge>
  nodes: Array<PrismicProjectCategory>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<PrismicProjectCategoryGroupConnection>
}

export type PrismicProjectCategoryConnectionDistinctArgs = {
  field: PrismicProjectCategoryFieldsEnum
}

export type PrismicProjectCategoryConnectionMaxArgs = {
  field: PrismicProjectCategoryFieldsEnum
}

export type PrismicProjectCategoryConnectionMinArgs = {
  field: PrismicProjectCategoryFieldsEnum
}

export type PrismicProjectCategoryConnectionSumArgs = {
  field: PrismicProjectCategoryFieldsEnum
}

export type PrismicProjectCategoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: PrismicProjectCategoryFieldsEnum
}

export type PrismicProjectCategoryDataType = {
  name?: Maybe<PrismicStructuredTextType>
}

export type PrismicProjectCategoryDataTypeFilterInput = {
  name?: Maybe<PrismicStructuredTextTypeFilterInput>
}

export type PrismicProjectCategoryEdge = {
  next?: Maybe<PrismicProjectCategory>
  node: PrismicProjectCategory
  previous?: Maybe<PrismicProjectCategory>
}

export enum PrismicProjectCategoryFieldsEnum {
  Uid = 'uid',
  DataNameText = 'data___name___text',
  DataNameHtml = 'data___name___html',
  DataNameRaw = 'data___name___raw',
  DataRaw = 'dataRaw',
  PrismicId = 'prismicId',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  Type = 'type',
  Url = 'url',
  Previewable = '_previewable',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicProjectCategoryFilterInput = {
  uid?: Maybe<StringQueryOperatorInput>
  data?: Maybe<PrismicProjectCategoryDataTypeFilterInput>
  dataRaw?: Maybe<JsonQueryOperatorInput>
  prismicId?: Maybe<IdQueryOperatorInput>
  alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
  first_publication_date?: Maybe<DateQueryOperatorInput>
  href?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  last_publication_date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  _previewable?: Maybe<IdQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type PrismicProjectCategoryGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicProjectCategoryEdge>
  nodes: Array<PrismicProjectCategory>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type PrismicProjectCategorySortInput = {
  fields?: Maybe<Array<Maybe<PrismicProjectCategoryFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicProjectConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicProjectEdge>
  nodes: Array<PrismicProject>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<PrismicProjectGroupConnection>
}

export type PrismicProjectConnectionDistinctArgs = {
  field: PrismicProjectFieldsEnum
}

export type PrismicProjectConnectionMaxArgs = {
  field: PrismicProjectFieldsEnum
}

export type PrismicProjectConnectionMinArgs = {
  field: PrismicProjectFieldsEnum
}

export type PrismicProjectConnectionSumArgs = {
  field: PrismicProjectFieldsEnum
}

export type PrismicProjectConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: PrismicProjectFieldsEnum
}

export type PrismicProjectDataBodyAnchor = PrismicSliceType & {
  primary?: Maybe<PrismicProjectDataBodyAnchorPrimary>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicProjectDataBodyAnchorPrimary = {
  id?: Maybe<Scalars['String']>
}

export type PrismicProjectDataBodyDivider = PrismicSliceType & {
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicProjectDataBodyImages = PrismicSliceType & {
  items?: Maybe<Array<Maybe<PrismicProjectDataBodyImagesItem>>>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicProjectDataBodyImagesItem = {
  caption?: Maybe<PrismicStructuredTextType>
  image?: Maybe<PrismicProjectDataBodyImagesItemsImageImageType>
}

export type PrismicProjectDataBodyImagesItemsImageImageType = {
  alt?: Maybe<Scalars['String']>
  copyright?: Maybe<Scalars['String']>
  dimensions?: Maybe<PrismicImageDimensionsType>
  /** A plain imgix URL with the URL and params applied. */
  url?: Maybe<Scalars['String']>
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed?: Maybe<ImgixFixed>
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid?: Maybe<ImgixFluid>
  gatsbyImageData?: Maybe<Scalars['JSON']>
  localFile?: Maybe<File>
}

export type PrismicProjectDataBodyImagesItemsImageImageTypeUrlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicProjectDataBodyImagesItemsImageImageTypeFixedArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  imgixParams?: Maybe<ImgixParamsInput>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicProjectDataBodyImagesItemsImageImageTypeFluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicProjectDataBodyImagesItemsImageImageTypeGatsbyImageDataArgs =
  {
    layout?: Maybe<GatsbyImageLayout>
    width?: Maybe<Scalars['Int']>
    height?: Maybe<Scalars['Int']>
    aspectRatio?: Maybe<Scalars['Float']>
    outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>
    breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
    sizes?: Maybe<Scalars['String']>
    backgroundColor?: Maybe<Scalars['String']>
    imgixParams?: Maybe<ImgixParamsInput>
    placeholderImgixParams?: Maybe<ImgixParamsInput>
    placeholder?: Maybe<ImgixPlaceholder>
    widthTolerance?: Maybe<Scalars['Float']>
    srcSetMinWidth?: Maybe<Scalars['Int']>
    srcSetMaxWidth?: Maybe<Scalars['Int']>
  }

export type PrismicProjectDataBodyLinkCard = PrismicSliceType & {
  primary?: Maybe<PrismicProjectDataBodyLinkCardPrimary>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicProjectDataBodyLinkCardPrimary = {
  link?: Maybe<PrismicLinkType>
  link_title?: Maybe<PrismicStructuredTextType>
}

export type PrismicProjectDataBodySlicesType =
  | PrismicProjectDataBodyAnchor
  | PrismicProjectDataBodyDivider
  | PrismicProjectDataBodyImages
  | PrismicProjectDataBodyLinkCard
  | PrismicProjectDataBodyText
  | PrismicProjectDataBodyTextIntro
  | PrismicProjectDataBodyVideo

export type PrismicProjectDataBodyText = PrismicSliceType & {
  primary?: Maybe<PrismicProjectDataBodyTextPrimary>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicProjectDataBodyTextIntro = PrismicSliceType & {
  primary?: Maybe<PrismicProjectDataBodyTextIntroPrimary>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicProjectDataBodyTextIntroPrimary = {
  introductory_text?: Maybe<PrismicStructuredTextType>
}

export type PrismicProjectDataBodyTextPrimary = {
  text?: Maybe<PrismicStructuredTextType>
}

export type PrismicProjectDataBodyVideo = PrismicSliceType & {
  primary?: Maybe<PrismicProjectDataBodyVideoPrimary>
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicProjectDataBodyVideoPrimary = {
  poster?: Maybe<PrismicProjectDataBodyVideoPrimaryPosterImageType>
  video?: Maybe<PrismicEmbedType>
}

export type PrismicProjectDataBodyVideoPrimaryPosterImageType = {
  alt?: Maybe<Scalars['String']>
  copyright?: Maybe<Scalars['String']>
  dimensions?: Maybe<PrismicImageDimensionsType>
  /** A plain imgix URL with the URL and params applied. */
  url?: Maybe<Scalars['String']>
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed?: Maybe<ImgixFixed>
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid?: Maybe<ImgixFluid>
  gatsbyImageData?: Maybe<Scalars['JSON']>
  localFile?: Maybe<File>
}

export type PrismicProjectDataBodyVideoPrimaryPosterImageTypeUrlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicProjectDataBodyVideoPrimaryPosterImageTypeFixedArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  imgixParams?: Maybe<ImgixParamsInput>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicProjectDataBodyVideoPrimaryPosterImageTypeFluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicProjectDataBodyVideoPrimaryPosterImageTypeGatsbyImageDataArgs =
  {
    layout?: Maybe<GatsbyImageLayout>
    width?: Maybe<Scalars['Int']>
    height?: Maybe<Scalars['Int']>
    aspectRatio?: Maybe<Scalars['Float']>
    outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>
    breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
    sizes?: Maybe<Scalars['String']>
    backgroundColor?: Maybe<Scalars['String']>
    imgixParams?: Maybe<ImgixParamsInput>
    placeholderImgixParams?: Maybe<ImgixParamsInput>
    placeholder?: Maybe<ImgixPlaceholder>
    widthTolerance?: Maybe<Scalars['Float']>
    srcSetMinWidth?: Maybe<Scalars['Int']>
    srcSetMaxWidth?: Maybe<Scalars['Int']>
  }

export type PrismicProjectDataFeaturedImageImageType = {
  alt?: Maybe<Scalars['String']>
  copyright?: Maybe<Scalars['String']>
  dimensions?: Maybe<PrismicImageDimensionsType>
  /** A plain imgix URL with the URL and params applied. */
  url?: Maybe<Scalars['String']>
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed?: Maybe<ImgixFixed>
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid?: Maybe<ImgixFluid>
  gatsbyImageData?: Maybe<Scalars['JSON']>
  localFile?: Maybe<File>
}

export type PrismicProjectDataFeaturedImageImageTypeUrlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicProjectDataFeaturedImageImageTypeFixedArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  imgixParams?: Maybe<ImgixParamsInput>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicProjectDataFeaturedImageImageTypeFluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
}

export type PrismicProjectDataFeaturedImageImageTypeGatsbyImageDataArgs = {
  layout?: Maybe<GatsbyImageLayout>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  aspectRatio?: Maybe<Scalars['Float']>
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
  sizes?: Maybe<Scalars['String']>
  backgroundColor?: Maybe<Scalars['String']>
  imgixParams?: Maybe<ImgixParamsInput>
  placeholderImgixParams?: Maybe<ImgixParamsInput>
  placeholder?: Maybe<ImgixPlaceholder>
  widthTolerance?: Maybe<Scalars['Float']>
  srcSetMinWidth?: Maybe<Scalars['Int']>
  srcSetMaxWidth?: Maybe<Scalars['Int']>
}

export type PrismicProjectDataFeaturedImageImageTypeFilterInput = {
  alt?: Maybe<StringQueryOperatorInput>
  copyright?: Maybe<StringQueryOperatorInput>
  dimensions?: Maybe<PrismicImageDimensionsTypeFilterInput>
  url?: Maybe<StringQueryOperatorInput>
  fixed?: Maybe<ImgixFixedFilterInput>
  fluid?: Maybe<ImgixFluidFilterInput>
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>
  localFile?: Maybe<FileFilterInput>
}

export type PrismicProjectDataInvolvedFellows = {
  involved_fellow?: Maybe<PrismicLinkType>
  label?: Maybe<PrismicStructuredTextType>
}

export type PrismicProjectDataInvolvedFellowsFilterInput = {
  involved_fellow?: Maybe<PrismicLinkTypeFilterInput>
  label?: Maybe<PrismicStructuredTextTypeFilterInput>
}

export type PrismicProjectDataInvolvedFellowsFilterListInput = {
  elemMatch?: Maybe<PrismicProjectDataInvolvedFellowsFilterInput>
}

export type PrismicProjectDataProjectCategories = {
  project_category?: Maybe<PrismicLinkType>
}

export type PrismicProjectDataProjectCategoriesFilterInput = {
  project_category?: Maybe<PrismicLinkTypeFilterInput>
}

export type PrismicProjectDataProjectCategoriesFilterListInput = {
  elemMatch?: Maybe<PrismicProjectDataProjectCategoriesFilterInput>
}

export type PrismicProjectDataType = {
  body?: Maybe<Array<Maybe<PrismicProjectDataBodySlicesType>>>
  description?: Maybe<PrismicStructuredTextType>
  featured_image?: Maybe<PrismicProjectDataFeaturedImageImageType>
  involved_fellows?: Maybe<Array<Maybe<PrismicProjectDataInvolvedFellows>>>
  project_categories?: Maybe<Array<Maybe<PrismicProjectDataProjectCategories>>>
  title?: Maybe<PrismicStructuredTextType>
  website_url?: Maybe<PrismicLinkType>
}

export type PrismicProjectDataTypeFilterInput = {
  description?: Maybe<PrismicStructuredTextTypeFilterInput>
  featured_image?: Maybe<PrismicProjectDataFeaturedImageImageTypeFilterInput>
  involved_fellows?: Maybe<PrismicProjectDataInvolvedFellowsFilterListInput>
  project_categories?: Maybe<PrismicProjectDataProjectCategoriesFilterListInput>
  title?: Maybe<PrismicStructuredTextTypeFilterInput>
  website_url?: Maybe<PrismicLinkTypeFilterInput>
}

export type PrismicProjectEdge = {
  next?: Maybe<PrismicProject>
  node: PrismicProject
  previous?: Maybe<PrismicProject>
}

export enum PrismicProjectFieldsEnum {
  Uid = 'uid',
  DataDescriptionText = 'data___description___text',
  DataDescriptionHtml = 'data___description___html',
  DataDescriptionRaw = 'data___description___raw',
  DataFeaturedImageAlt = 'data___featured_image___alt',
  DataFeaturedImageCopyright = 'data___featured_image___copyright',
  DataFeaturedImageDimensionsWidth = 'data___featured_image___dimensions___width',
  DataFeaturedImageDimensionsHeight = 'data___featured_image___dimensions___height',
  DataFeaturedImageUrl = 'data___featured_image___url',
  DataFeaturedImageFixedBase64 = 'data___featured_image___fixed___base64',
  DataFeaturedImageFixedSrc = 'data___featured_image___fixed___src',
  DataFeaturedImageFixedSrcSet = 'data___featured_image___fixed___srcSet',
  DataFeaturedImageFixedSrcWebp = 'data___featured_image___fixed___srcWebp',
  DataFeaturedImageFixedSrcSetWebp = 'data___featured_image___fixed___srcSetWebp',
  DataFeaturedImageFixedSizes = 'data___featured_image___fixed___sizes',
  DataFeaturedImageFixedWidth = 'data___featured_image___fixed___width',
  DataFeaturedImageFixedHeight = 'data___featured_image___fixed___height',
  DataFeaturedImageFluidBase64 = 'data___featured_image___fluid___base64',
  DataFeaturedImageFluidSrc = 'data___featured_image___fluid___src',
  DataFeaturedImageFluidSrcSet = 'data___featured_image___fluid___srcSet',
  DataFeaturedImageFluidSrcWebp = 'data___featured_image___fluid___srcWebp',
  DataFeaturedImageFluidSrcSetWebp = 'data___featured_image___fluid___srcSetWebp',
  DataFeaturedImageFluidSizes = 'data___featured_image___fluid___sizes',
  DataFeaturedImageFluidAspectRatio = 'data___featured_image___fluid___aspectRatio',
  DataFeaturedImageGatsbyImageData = 'data___featured_image___gatsbyImageData',
  DataFeaturedImageLocalFileSourceInstanceName = 'data___featured_image___localFile___sourceInstanceName',
  DataFeaturedImageLocalFileAbsolutePath = 'data___featured_image___localFile___absolutePath',
  DataFeaturedImageLocalFileRelativePath = 'data___featured_image___localFile___relativePath',
  DataFeaturedImageLocalFileExtension = 'data___featured_image___localFile___extension',
  DataFeaturedImageLocalFileSize = 'data___featured_image___localFile___size',
  DataFeaturedImageLocalFilePrettySize = 'data___featured_image___localFile___prettySize',
  DataFeaturedImageLocalFileModifiedTime = 'data___featured_image___localFile___modifiedTime',
  DataFeaturedImageLocalFileAccessTime = 'data___featured_image___localFile___accessTime',
  DataFeaturedImageLocalFileChangeTime = 'data___featured_image___localFile___changeTime',
  DataFeaturedImageLocalFileBirthTime = 'data___featured_image___localFile___birthTime',
  DataFeaturedImageLocalFileRoot = 'data___featured_image___localFile___root',
  DataFeaturedImageLocalFileDir = 'data___featured_image___localFile___dir',
  DataFeaturedImageLocalFileBase = 'data___featured_image___localFile___base',
  DataFeaturedImageLocalFileExt = 'data___featured_image___localFile___ext',
  DataFeaturedImageLocalFileName = 'data___featured_image___localFile___name',
  DataFeaturedImageLocalFileRelativeDirectory = 'data___featured_image___localFile___relativeDirectory',
  DataFeaturedImageLocalFileDev = 'data___featured_image___localFile___dev',
  DataFeaturedImageLocalFileMode = 'data___featured_image___localFile___mode',
  DataFeaturedImageLocalFileNlink = 'data___featured_image___localFile___nlink',
  DataFeaturedImageLocalFileUid = 'data___featured_image___localFile___uid',
  DataFeaturedImageLocalFileGid = 'data___featured_image___localFile___gid',
  DataFeaturedImageLocalFileRdev = 'data___featured_image___localFile___rdev',
  DataFeaturedImageLocalFileIno = 'data___featured_image___localFile___ino',
  DataFeaturedImageLocalFileAtimeMs = 'data___featured_image___localFile___atimeMs',
  DataFeaturedImageLocalFileMtimeMs = 'data___featured_image___localFile___mtimeMs',
  DataFeaturedImageLocalFileCtimeMs = 'data___featured_image___localFile___ctimeMs',
  DataFeaturedImageLocalFileAtime = 'data___featured_image___localFile___atime',
  DataFeaturedImageLocalFileMtime = 'data___featured_image___localFile___mtime',
  DataFeaturedImageLocalFileCtime = 'data___featured_image___localFile___ctime',
  DataFeaturedImageLocalFileBirthtime = 'data___featured_image___localFile___birthtime',
  DataFeaturedImageLocalFileBirthtimeMs = 'data___featured_image___localFile___birthtimeMs',
  DataFeaturedImageLocalFileId = 'data___featured_image___localFile___id',
  DataFeaturedImageLocalFileChildren = 'data___featured_image___localFile___children',
  DataInvolvedFellows = 'data___involved_fellows',
  DataInvolvedFellowsInvolvedFellowLinkType = 'data___involved_fellows___involved_fellow___link_type',
  DataInvolvedFellowsInvolvedFellowIsBroken = 'data___involved_fellows___involved_fellow___isBroken',
  DataInvolvedFellowsInvolvedFellowUrl = 'data___involved_fellows___involved_fellow___url',
  DataInvolvedFellowsInvolvedFellowTarget = 'data___involved_fellows___involved_fellow___target',
  DataInvolvedFellowsInvolvedFellowSize = 'data___involved_fellows___involved_fellow___size',
  DataInvolvedFellowsInvolvedFellowId = 'data___involved_fellows___involved_fellow___id',
  DataInvolvedFellowsInvolvedFellowType = 'data___involved_fellows___involved_fellow___type',
  DataInvolvedFellowsInvolvedFellowTags = 'data___involved_fellows___involved_fellow___tags',
  DataInvolvedFellowsInvolvedFellowLang = 'data___involved_fellows___involved_fellow___lang',
  DataInvolvedFellowsInvolvedFellowSlug = 'data___involved_fellows___involved_fellow___slug',
  DataInvolvedFellowsInvolvedFellowUid = 'data___involved_fellows___involved_fellow___uid',
  DataInvolvedFellowsInvolvedFellowRaw = 'data___involved_fellows___involved_fellow___raw',
  DataInvolvedFellowsLabelText = 'data___involved_fellows___label___text',
  DataInvolvedFellowsLabelHtml = 'data___involved_fellows___label___html',
  DataInvolvedFellowsLabelRaw = 'data___involved_fellows___label___raw',
  DataProjectCategories = 'data___project_categories',
  DataProjectCategoriesProjectCategoryLinkType = 'data___project_categories___project_category___link_type',
  DataProjectCategoriesProjectCategoryIsBroken = 'data___project_categories___project_category___isBroken',
  DataProjectCategoriesProjectCategoryUrl = 'data___project_categories___project_category___url',
  DataProjectCategoriesProjectCategoryTarget = 'data___project_categories___project_category___target',
  DataProjectCategoriesProjectCategorySize = 'data___project_categories___project_category___size',
  DataProjectCategoriesProjectCategoryId = 'data___project_categories___project_category___id',
  DataProjectCategoriesProjectCategoryType = 'data___project_categories___project_category___type',
  DataProjectCategoriesProjectCategoryTags = 'data___project_categories___project_category___tags',
  DataProjectCategoriesProjectCategoryLang = 'data___project_categories___project_category___lang',
  DataProjectCategoriesProjectCategorySlug = 'data___project_categories___project_category___slug',
  DataProjectCategoriesProjectCategoryUid = 'data___project_categories___project_category___uid',
  DataProjectCategoriesProjectCategoryRaw = 'data___project_categories___project_category___raw',
  DataTitleText = 'data___title___text',
  DataTitleHtml = 'data___title___html',
  DataTitleRaw = 'data___title___raw',
  DataWebsiteUrlLinkType = 'data___website_url___link_type',
  DataWebsiteUrlIsBroken = 'data___website_url___isBroken',
  DataWebsiteUrlUrl = 'data___website_url___url',
  DataWebsiteUrlTarget = 'data___website_url___target',
  DataWebsiteUrlSize = 'data___website_url___size',
  DataWebsiteUrlId = 'data___website_url___id',
  DataWebsiteUrlType = 'data___website_url___type',
  DataWebsiteUrlTags = 'data___website_url___tags',
  DataWebsiteUrlLang = 'data___website_url___lang',
  DataWebsiteUrlSlug = 'data___website_url___slug',
  DataWebsiteUrlUid = 'data___website_url___uid',
  DataWebsiteUrlLocalFileSourceInstanceName = 'data___website_url___localFile___sourceInstanceName',
  DataWebsiteUrlLocalFileAbsolutePath = 'data___website_url___localFile___absolutePath',
  DataWebsiteUrlLocalFileRelativePath = 'data___website_url___localFile___relativePath',
  DataWebsiteUrlLocalFileExtension = 'data___website_url___localFile___extension',
  DataWebsiteUrlLocalFileSize = 'data___website_url___localFile___size',
  DataWebsiteUrlLocalFilePrettySize = 'data___website_url___localFile___prettySize',
  DataWebsiteUrlLocalFileModifiedTime = 'data___website_url___localFile___modifiedTime',
  DataWebsiteUrlLocalFileAccessTime = 'data___website_url___localFile___accessTime',
  DataWebsiteUrlLocalFileChangeTime = 'data___website_url___localFile___changeTime',
  DataWebsiteUrlLocalFileBirthTime = 'data___website_url___localFile___birthTime',
  DataWebsiteUrlLocalFileRoot = 'data___website_url___localFile___root',
  DataWebsiteUrlLocalFileDir = 'data___website_url___localFile___dir',
  DataWebsiteUrlLocalFileBase = 'data___website_url___localFile___base',
  DataWebsiteUrlLocalFileExt = 'data___website_url___localFile___ext',
  DataWebsiteUrlLocalFileName = 'data___website_url___localFile___name',
  DataWebsiteUrlLocalFileRelativeDirectory = 'data___website_url___localFile___relativeDirectory',
  DataWebsiteUrlLocalFileDev = 'data___website_url___localFile___dev',
  DataWebsiteUrlLocalFileMode = 'data___website_url___localFile___mode',
  DataWebsiteUrlLocalFileNlink = 'data___website_url___localFile___nlink',
  DataWebsiteUrlLocalFileUid = 'data___website_url___localFile___uid',
  DataWebsiteUrlLocalFileGid = 'data___website_url___localFile___gid',
  DataWebsiteUrlLocalFileRdev = 'data___website_url___localFile___rdev',
  DataWebsiteUrlLocalFileIno = 'data___website_url___localFile___ino',
  DataWebsiteUrlLocalFileAtimeMs = 'data___website_url___localFile___atimeMs',
  DataWebsiteUrlLocalFileMtimeMs = 'data___website_url___localFile___mtimeMs',
  DataWebsiteUrlLocalFileCtimeMs = 'data___website_url___localFile___ctimeMs',
  DataWebsiteUrlLocalFileAtime = 'data___website_url___localFile___atime',
  DataWebsiteUrlLocalFileMtime = 'data___website_url___localFile___mtime',
  DataWebsiteUrlLocalFileCtime = 'data___website_url___localFile___ctime',
  DataWebsiteUrlLocalFileBirthtime = 'data___website_url___localFile___birthtime',
  DataWebsiteUrlLocalFileBirthtimeMs = 'data___website_url___localFile___birthtimeMs',
  DataWebsiteUrlLocalFileId = 'data___website_url___localFile___id',
  DataWebsiteUrlLocalFileChildren = 'data___website_url___localFile___children',
  DataWebsiteUrlRaw = 'data___website_url___raw',
  DataRaw = 'dataRaw',
  PrismicId = 'prismicId',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  Type = 'type',
  Url = 'url',
  Previewable = '_previewable',
  OnBuildOnlyNormalizedTitle = '_ON_BUILD_ONLY_normalized_title',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicProjectFilterInput = {
  uid?: Maybe<StringQueryOperatorInput>
  data?: Maybe<PrismicProjectDataTypeFilterInput>
  dataRaw?: Maybe<JsonQueryOperatorInput>
  prismicId?: Maybe<IdQueryOperatorInput>
  alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
  first_publication_date?: Maybe<DateQueryOperatorInput>
  href?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  last_publication_date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  _previewable?: Maybe<IdQueryOperatorInput>
  _ON_BUILD_ONLY_normalized_title?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type PrismicProjectGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicProjectEdge>
  nodes: Array<PrismicProject>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type PrismicProjectSortInput = {
  fields?: Maybe<Array<Maybe<PrismicProjectFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicSettings = Node & {
  data?: Maybe<PrismicSettingsDataType>
  dataRaw: Scalars['JSON']
  prismicId: Scalars['ID']
  alternate_languages: Array<PrismicAlternateLanguageType>
  first_publication_date: Scalars['Date']
  href: Scalars['String']
  lang: Scalars['String']
  last_publication_date: Scalars['Date']
  tags: Array<Scalars['String']>
  type: Scalars['String']
  url?: Maybe<Scalars['String']>
  _previewable: Scalars['ID']
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type PrismicSettingsFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicSettingsLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicSettingsConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicSettingsEdge>
  nodes: Array<PrismicSettings>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<PrismicSettingsGroupConnection>
}

export type PrismicSettingsConnectionDistinctArgs = {
  field: PrismicSettingsFieldsEnum
}

export type PrismicSettingsConnectionMaxArgs = {
  field: PrismicSettingsFieldsEnum
}

export type PrismicSettingsConnectionMinArgs = {
  field: PrismicSettingsFieldsEnum
}

export type PrismicSettingsConnectionSumArgs = {
  field: PrismicSettingsFieldsEnum
}

export type PrismicSettingsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: PrismicSettingsFieldsEnum
}

export type PrismicSettingsDataPreviewMap = {
  api_id?: Maybe<Scalars['String']>
  page?: Maybe<PrismicLinkType>
}

export type PrismicSettingsDataPreviewMapFilterInput = {
  api_id?: Maybe<StringQueryOperatorInput>
  page?: Maybe<PrismicLinkTypeFilterInput>
}

export type PrismicSettingsDataPreviewMapFilterListInput = {
  elemMatch?: Maybe<PrismicSettingsDataPreviewMapFilterInput>
}

export type PrismicSettingsDataRedirects = {
  from_path?: Maybe<Scalars['String']>
  is_permanent?: Maybe<Scalars['Boolean']>
  to_path?: Maybe<Scalars['String']>
}

export type PrismicSettingsDataRedirectsFilterInput = {
  from_path?: Maybe<StringQueryOperatorInput>
  is_permanent?: Maybe<BooleanQueryOperatorInput>
  to_path?: Maybe<StringQueryOperatorInput>
}

export type PrismicSettingsDataRedirectsFilterListInput = {
  elemMatch?: Maybe<PrismicSettingsDataRedirectsFilterInput>
}

export type PrismicSettingsDataType = {
  facebook_handle?: Maybe<PrismicStructuredTextType>
  linkedin_handle?: Maybe<PrismicStructuredTextType>
  newsletter_sign_up_link?: Maybe<PrismicLinkType>
  preview_map?: Maybe<Array<Maybe<PrismicSettingsDataPreviewMap>>>
  redirects?: Maybe<Array<Maybe<PrismicSettingsDataRedirects>>>
  site_copyright?: Maybe<PrismicStructuredTextType>
  site_description?: Maybe<PrismicStructuredTextType>
  site_name?: Maybe<PrismicStructuredTextType>
  title?: Maybe<PrismicStructuredTextType>
}

export type PrismicSettingsDataTypeFilterInput = {
  facebook_handle?: Maybe<PrismicStructuredTextTypeFilterInput>
  linkedin_handle?: Maybe<PrismicStructuredTextTypeFilterInput>
  newsletter_sign_up_link?: Maybe<PrismicLinkTypeFilterInput>
  preview_map?: Maybe<PrismicSettingsDataPreviewMapFilterListInput>
  redirects?: Maybe<PrismicSettingsDataRedirectsFilterListInput>
  site_copyright?: Maybe<PrismicStructuredTextTypeFilterInput>
  site_description?: Maybe<PrismicStructuredTextTypeFilterInput>
  site_name?: Maybe<PrismicStructuredTextTypeFilterInput>
  title?: Maybe<PrismicStructuredTextTypeFilterInput>
}

export type PrismicSettingsEdge = {
  next?: Maybe<PrismicSettings>
  node: PrismicSettings
  previous?: Maybe<PrismicSettings>
}

export enum PrismicSettingsFieldsEnum {
  DataFacebookHandleText = 'data___facebook_handle___text',
  DataFacebookHandleHtml = 'data___facebook_handle___html',
  DataFacebookHandleRaw = 'data___facebook_handle___raw',
  DataLinkedinHandleText = 'data___linkedin_handle___text',
  DataLinkedinHandleHtml = 'data___linkedin_handle___html',
  DataLinkedinHandleRaw = 'data___linkedin_handle___raw',
  DataNewsletterSignUpLinkLinkType = 'data___newsletter_sign_up_link___link_type',
  DataNewsletterSignUpLinkIsBroken = 'data___newsletter_sign_up_link___isBroken',
  DataNewsletterSignUpLinkUrl = 'data___newsletter_sign_up_link___url',
  DataNewsletterSignUpLinkTarget = 'data___newsletter_sign_up_link___target',
  DataNewsletterSignUpLinkSize = 'data___newsletter_sign_up_link___size',
  DataNewsletterSignUpLinkId = 'data___newsletter_sign_up_link___id',
  DataNewsletterSignUpLinkType = 'data___newsletter_sign_up_link___type',
  DataNewsletterSignUpLinkTags = 'data___newsletter_sign_up_link___tags',
  DataNewsletterSignUpLinkLang = 'data___newsletter_sign_up_link___lang',
  DataNewsletterSignUpLinkSlug = 'data___newsletter_sign_up_link___slug',
  DataNewsletterSignUpLinkUid = 'data___newsletter_sign_up_link___uid',
  DataNewsletterSignUpLinkLocalFileSourceInstanceName = 'data___newsletter_sign_up_link___localFile___sourceInstanceName',
  DataNewsletterSignUpLinkLocalFileAbsolutePath = 'data___newsletter_sign_up_link___localFile___absolutePath',
  DataNewsletterSignUpLinkLocalFileRelativePath = 'data___newsletter_sign_up_link___localFile___relativePath',
  DataNewsletterSignUpLinkLocalFileExtension = 'data___newsletter_sign_up_link___localFile___extension',
  DataNewsletterSignUpLinkLocalFileSize = 'data___newsletter_sign_up_link___localFile___size',
  DataNewsletterSignUpLinkLocalFilePrettySize = 'data___newsletter_sign_up_link___localFile___prettySize',
  DataNewsletterSignUpLinkLocalFileModifiedTime = 'data___newsletter_sign_up_link___localFile___modifiedTime',
  DataNewsletterSignUpLinkLocalFileAccessTime = 'data___newsletter_sign_up_link___localFile___accessTime',
  DataNewsletterSignUpLinkLocalFileChangeTime = 'data___newsletter_sign_up_link___localFile___changeTime',
  DataNewsletterSignUpLinkLocalFileBirthTime = 'data___newsletter_sign_up_link___localFile___birthTime',
  DataNewsletterSignUpLinkLocalFileRoot = 'data___newsletter_sign_up_link___localFile___root',
  DataNewsletterSignUpLinkLocalFileDir = 'data___newsletter_sign_up_link___localFile___dir',
  DataNewsletterSignUpLinkLocalFileBase = 'data___newsletter_sign_up_link___localFile___base',
  DataNewsletterSignUpLinkLocalFileExt = 'data___newsletter_sign_up_link___localFile___ext',
  DataNewsletterSignUpLinkLocalFileName = 'data___newsletter_sign_up_link___localFile___name',
  DataNewsletterSignUpLinkLocalFileRelativeDirectory = 'data___newsletter_sign_up_link___localFile___relativeDirectory',
  DataNewsletterSignUpLinkLocalFileDev = 'data___newsletter_sign_up_link___localFile___dev',
  DataNewsletterSignUpLinkLocalFileMode = 'data___newsletter_sign_up_link___localFile___mode',
  DataNewsletterSignUpLinkLocalFileNlink = 'data___newsletter_sign_up_link___localFile___nlink',
  DataNewsletterSignUpLinkLocalFileUid = 'data___newsletter_sign_up_link___localFile___uid',
  DataNewsletterSignUpLinkLocalFileGid = 'data___newsletter_sign_up_link___localFile___gid',
  DataNewsletterSignUpLinkLocalFileRdev = 'data___newsletter_sign_up_link___localFile___rdev',
  DataNewsletterSignUpLinkLocalFileIno = 'data___newsletter_sign_up_link___localFile___ino',
  DataNewsletterSignUpLinkLocalFileAtimeMs = 'data___newsletter_sign_up_link___localFile___atimeMs',
  DataNewsletterSignUpLinkLocalFileMtimeMs = 'data___newsletter_sign_up_link___localFile___mtimeMs',
  DataNewsletterSignUpLinkLocalFileCtimeMs = 'data___newsletter_sign_up_link___localFile___ctimeMs',
  DataNewsletterSignUpLinkLocalFileAtime = 'data___newsletter_sign_up_link___localFile___atime',
  DataNewsletterSignUpLinkLocalFileMtime = 'data___newsletter_sign_up_link___localFile___mtime',
  DataNewsletterSignUpLinkLocalFileCtime = 'data___newsletter_sign_up_link___localFile___ctime',
  DataNewsletterSignUpLinkLocalFileBirthtime = 'data___newsletter_sign_up_link___localFile___birthtime',
  DataNewsletterSignUpLinkLocalFileBirthtimeMs = 'data___newsletter_sign_up_link___localFile___birthtimeMs',
  DataNewsletterSignUpLinkLocalFileId = 'data___newsletter_sign_up_link___localFile___id',
  DataNewsletterSignUpLinkLocalFileChildren = 'data___newsletter_sign_up_link___localFile___children',
  DataNewsletterSignUpLinkRaw = 'data___newsletter_sign_up_link___raw',
  DataPreviewMap = 'data___preview_map',
  DataPreviewMapApiId = 'data___preview_map___api_id',
  DataPreviewMapPageLinkType = 'data___preview_map___page___link_type',
  DataPreviewMapPageIsBroken = 'data___preview_map___page___isBroken',
  DataPreviewMapPageUrl = 'data___preview_map___page___url',
  DataPreviewMapPageTarget = 'data___preview_map___page___target',
  DataPreviewMapPageSize = 'data___preview_map___page___size',
  DataPreviewMapPageId = 'data___preview_map___page___id',
  DataPreviewMapPageType = 'data___preview_map___page___type',
  DataPreviewMapPageTags = 'data___preview_map___page___tags',
  DataPreviewMapPageLang = 'data___preview_map___page___lang',
  DataPreviewMapPageSlug = 'data___preview_map___page___slug',
  DataPreviewMapPageUid = 'data___preview_map___page___uid',
  DataPreviewMapPageRaw = 'data___preview_map___page___raw',
  DataRedirects = 'data___redirects',
  DataRedirectsFromPath = 'data___redirects___from_path',
  DataRedirectsIsPermanent = 'data___redirects___is_permanent',
  DataRedirectsToPath = 'data___redirects___to_path',
  DataSiteCopyrightText = 'data___site_copyright___text',
  DataSiteCopyrightHtml = 'data___site_copyright___html',
  DataSiteCopyrightRaw = 'data___site_copyright___raw',
  DataSiteDescriptionText = 'data___site_description___text',
  DataSiteDescriptionHtml = 'data___site_description___html',
  DataSiteDescriptionRaw = 'data___site_description___raw',
  DataSiteNameText = 'data___site_name___text',
  DataSiteNameHtml = 'data___site_name___html',
  DataSiteNameRaw = 'data___site_name___raw',
  DataTitleText = 'data___title___text',
  DataTitleHtml = 'data___title___html',
  DataTitleRaw = 'data___title___raw',
  DataRaw = 'dataRaw',
  PrismicId = 'prismicId',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  Type = 'type',
  Url = 'url',
  Previewable = '_previewable',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicSettingsFilterInput = {
  data?: Maybe<PrismicSettingsDataTypeFilterInput>
  dataRaw?: Maybe<JsonQueryOperatorInput>
  prismicId?: Maybe<IdQueryOperatorInput>
  alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
  first_publication_date?: Maybe<DateQueryOperatorInput>
  href?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  last_publication_date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  _previewable?: Maybe<IdQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type PrismicSettingsGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicSettingsEdge>
  nodes: Array<PrismicSettings>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type PrismicSettingsSortInput = {
  fields?: Maybe<Array<Maybe<PrismicSettingsFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicSliceType = {
  id: Scalars['ID']
  slice_type: Scalars['String']
  slice_label?: Maybe<Scalars['String']>
}

export type PrismicStructuredTextType = {
  text?: Maybe<Scalars['String']>
  html?: Maybe<Scalars['String']>
  raw?: Maybe<Scalars['JSON']>
}

export type PrismicStructuredTextTypeFilterInput = {
  text?: Maybe<StringQueryOperatorInput>
  html?: Maybe<StringQueryOperatorInput>
  raw?: Maybe<JsonQueryOperatorInput>
}

export type PrismicTypePathType = Node & {
  path: Array<Scalars['String']>
  type: Scalars['String']
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type PrismicTypePathTypeConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicTypePathTypeEdge>
  nodes: Array<PrismicTypePathType>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<PrismicTypePathTypeGroupConnection>
}

export type PrismicTypePathTypeConnectionDistinctArgs = {
  field: PrismicTypePathTypeFieldsEnum
}

export type PrismicTypePathTypeConnectionMaxArgs = {
  field: PrismicTypePathTypeFieldsEnum
}

export type PrismicTypePathTypeConnectionMinArgs = {
  field: PrismicTypePathTypeFieldsEnum
}

export type PrismicTypePathTypeConnectionSumArgs = {
  field: PrismicTypePathTypeFieldsEnum
}

export type PrismicTypePathTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: PrismicTypePathTypeFieldsEnum
}

export type PrismicTypePathTypeEdge = {
  next?: Maybe<PrismicTypePathType>
  node: PrismicTypePathType
  previous?: Maybe<PrismicTypePathType>
}

export enum PrismicTypePathTypeFieldsEnum {
  Path = 'path',
  Type = 'type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicTypePathTypeFilterInput = {
  path?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type PrismicTypePathTypeGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicTypePathTypeEdge>
  nodes: Array<PrismicTypePathType>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type PrismicTypePathTypeSortInput = {
  fields?: Maybe<Array<Maybe<PrismicTypePathTypeFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type Query = {
  file?: Maybe<File>
  allFile: FileConnection
  directory?: Maybe<Directory>
  allDirectory: DirectoryConnection
  site?: Maybe<Site>
  allSite: SiteConnection
  siteFunction?: Maybe<SiteFunction>
  allSiteFunction: SiteFunctionConnection
  sitePage?: Maybe<SitePage>
  allSitePage: SitePageConnection
  prismicEmbedType?: Maybe<PrismicEmbedType>
  allPrismicEmbedType: PrismicEmbedTypeConnection
  prismicTypePathType?: Maybe<PrismicTypePathType>
  allPrismicTypePathType: PrismicTypePathTypeConnection
  prismicCohort?: Maybe<PrismicCohort>
  allPrismicCohort: PrismicCohortConnection
  prismicCohortSchedule?: Maybe<PrismicCohortSchedule>
  allPrismicCohortSchedule: PrismicCohortScheduleConnection
  prismicFellow?: Maybe<PrismicFellow>
  allPrismicFellow: PrismicFellowConnection
  prismicInteriorPage?: Maybe<PrismicInteriorPage>
  allPrismicInteriorPage: PrismicInteriorPageConnection
  prismicNavigation?: Maybe<PrismicNavigation>
  allPrismicNavigation: PrismicNavigationConnection
  prismicNewsCategory?: Maybe<PrismicNewsCategory>
  allPrismicNewsCategory: PrismicNewsCategoryConnection
  prismicNewsPost?: Maybe<PrismicNewsPost>
  allPrismicNewsPost: PrismicNewsPostConnection
  prismicPage?: Maybe<PrismicPage>
  allPrismicPage: PrismicPageConnection
  prismicProject?: Maybe<PrismicProject>
  allPrismicProject: PrismicProjectConnection
  prismicProjectCategory?: Maybe<PrismicProjectCategory>
  allPrismicProjectCategory: PrismicProjectCategoryConnection
  prismicSettings?: Maybe<PrismicSettings>
  allPrismicSettings: PrismicSettingsConnection
  localSearchAllContent?: Maybe<LocalSearchAllContent>
  allLocalSearchAllContent: LocalSearchAllContentConnection
  sitePlugin?: Maybe<SitePlugin>
  allSitePlugin: SitePluginConnection
  siteBuildMetadata?: Maybe<SiteBuildMetadata>
  allSiteBuildMetadata: SiteBuildMetadataConnection
}

export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>
  sort?: Maybe<FileSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>
  sort?: Maybe<DirectorySortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<IntQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>
  sort?: Maybe<SiteSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySiteFunctionArgs = {
  functionRoute?: Maybe<StringQueryOperatorInput>
  pluginName?: Maybe<StringQueryOperatorInput>
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>
  sort?: Maybe<SiteFunctionSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
}

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>
  sort?: Maybe<SitePageSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryPrismicEmbedTypeArgs = {
  is_plus?: Maybe<StringQueryOperatorInput>
  account_type?: Maybe<StringQueryOperatorInput>
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
  duration?: Maybe<IntQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  thumbnail_url_with_play_button?: Maybe<StringQueryOperatorInput>
  upload_date?: Maybe<DateQueryOperatorInput>
  video_id?: Maybe<IntQueryOperatorInput>
  uri?: Maybe<StringQueryOperatorInput>
  embed_url?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  author_name?: Maybe<StringQueryOperatorInput>
  author_url?: Maybe<StringQueryOperatorInput>
  provider_name?: Maybe<StringQueryOperatorInput>
  provider_url?: Maybe<StringQueryOperatorInput>
  thumbnail_url?: Maybe<StringQueryOperatorInput>
  thumbnail_width?: Maybe<IntQueryOperatorInput>
  thumbnail_height?: Maybe<IntQueryOperatorInput>
  html?: Maybe<StringQueryOperatorInput>
  prismicId?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicEmbedTypeArgs = {
  filter?: Maybe<PrismicEmbedTypeFilterInput>
  sort?: Maybe<PrismicEmbedTypeSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryPrismicTypePathTypeArgs = {
  path?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicTypePathTypeArgs = {
  filter?: Maybe<PrismicTypePathTypeFilterInput>
  sort?: Maybe<PrismicTypePathTypeSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryPrismicCohortArgs = {
  uid?: Maybe<StringQueryOperatorInput>
  data?: Maybe<PrismicCohortDataTypeFilterInput>
  dataRaw?: Maybe<JsonQueryOperatorInput>
  prismicId?: Maybe<IdQueryOperatorInput>
  alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
  first_publication_date?: Maybe<DateQueryOperatorInput>
  href?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  last_publication_date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  _previewable?: Maybe<IdQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicCohortArgs = {
  filter?: Maybe<PrismicCohortFilterInput>
  sort?: Maybe<PrismicCohortSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryPrismicCohortScheduleArgs = {
  uid?: Maybe<StringQueryOperatorInput>
  data?: Maybe<PrismicCohortScheduleDataTypeFilterInput>
  dataRaw?: Maybe<JsonQueryOperatorInput>
  prismicId?: Maybe<IdQueryOperatorInput>
  alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
  first_publication_date?: Maybe<DateQueryOperatorInput>
  href?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  last_publication_date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  _previewable?: Maybe<IdQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicCohortScheduleArgs = {
  filter?: Maybe<PrismicCohortScheduleFilterInput>
  sort?: Maybe<PrismicCohortScheduleSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryPrismicFellowArgs = {
  uid?: Maybe<StringQueryOperatorInput>
  data?: Maybe<PrismicFellowDataTypeFilterInput>
  dataRaw?: Maybe<JsonQueryOperatorInput>
  prismicId?: Maybe<IdQueryOperatorInput>
  alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
  first_publication_date?: Maybe<DateQueryOperatorInput>
  href?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  last_publication_date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  _previewable?: Maybe<IdQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicFellowArgs = {
  filter?: Maybe<PrismicFellowFilterInput>
  sort?: Maybe<PrismicFellowSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryPrismicInteriorPageArgs = {
  uid?: Maybe<StringQueryOperatorInput>
  data?: Maybe<PrismicInteriorPageDataTypeFilterInput>
  dataRaw?: Maybe<JsonQueryOperatorInput>
  prismicId?: Maybe<IdQueryOperatorInput>
  alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
  first_publication_date?: Maybe<DateQueryOperatorInput>
  href?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  last_publication_date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  _previewable?: Maybe<IdQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicInteriorPageArgs = {
  filter?: Maybe<PrismicInteriorPageFilterInput>
  sort?: Maybe<PrismicInteriorPageSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryPrismicNavigationArgs = {
  uid?: Maybe<StringQueryOperatorInput>
  data?: Maybe<PrismicNavigationDataTypeFilterInput>
  dataRaw?: Maybe<JsonQueryOperatorInput>
  prismicId?: Maybe<IdQueryOperatorInput>
  alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
  first_publication_date?: Maybe<DateQueryOperatorInput>
  href?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  last_publication_date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  _previewable?: Maybe<IdQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicNavigationArgs = {
  filter?: Maybe<PrismicNavigationFilterInput>
  sort?: Maybe<PrismicNavigationSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryPrismicNewsCategoryArgs = {
  uid?: Maybe<StringQueryOperatorInput>
  data?: Maybe<PrismicNewsCategoryDataTypeFilterInput>
  dataRaw?: Maybe<JsonQueryOperatorInput>
  prismicId?: Maybe<IdQueryOperatorInput>
  alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
  first_publication_date?: Maybe<DateQueryOperatorInput>
  href?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  last_publication_date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  _previewable?: Maybe<IdQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicNewsCategoryArgs = {
  filter?: Maybe<PrismicNewsCategoryFilterInput>
  sort?: Maybe<PrismicNewsCategorySortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryPrismicNewsPostArgs = {
  uid?: Maybe<StringQueryOperatorInput>
  data?: Maybe<PrismicNewsPostDataTypeFilterInput>
  dataRaw?: Maybe<JsonQueryOperatorInput>
  prismicId?: Maybe<IdQueryOperatorInput>
  alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
  first_publication_date?: Maybe<DateQueryOperatorInput>
  href?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  last_publication_date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  _previewable?: Maybe<IdQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicNewsPostArgs = {
  filter?: Maybe<PrismicNewsPostFilterInput>
  sort?: Maybe<PrismicNewsPostSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryPrismicPageArgs = {
  uid?: Maybe<StringQueryOperatorInput>
  data?: Maybe<PrismicPageDataTypeFilterInput>
  dataRaw?: Maybe<JsonQueryOperatorInput>
  prismicId?: Maybe<IdQueryOperatorInput>
  alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
  first_publication_date?: Maybe<DateQueryOperatorInput>
  href?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  last_publication_date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  _previewable?: Maybe<IdQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicPageArgs = {
  filter?: Maybe<PrismicPageFilterInput>
  sort?: Maybe<PrismicPageSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryPrismicProjectArgs = {
  uid?: Maybe<StringQueryOperatorInput>
  data?: Maybe<PrismicProjectDataTypeFilterInput>
  dataRaw?: Maybe<JsonQueryOperatorInput>
  prismicId?: Maybe<IdQueryOperatorInput>
  alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
  first_publication_date?: Maybe<DateQueryOperatorInput>
  href?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  last_publication_date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  _previewable?: Maybe<IdQueryOperatorInput>
  _ON_BUILD_ONLY_normalized_title?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicProjectArgs = {
  filter?: Maybe<PrismicProjectFilterInput>
  sort?: Maybe<PrismicProjectSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryPrismicProjectCategoryArgs = {
  uid?: Maybe<StringQueryOperatorInput>
  data?: Maybe<PrismicProjectCategoryDataTypeFilterInput>
  dataRaw?: Maybe<JsonQueryOperatorInput>
  prismicId?: Maybe<IdQueryOperatorInput>
  alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
  first_publication_date?: Maybe<DateQueryOperatorInput>
  href?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  last_publication_date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  _previewable?: Maybe<IdQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicProjectCategoryArgs = {
  filter?: Maybe<PrismicProjectCategoryFilterInput>
  sort?: Maybe<PrismicProjectCategorySortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryPrismicSettingsArgs = {
  data?: Maybe<PrismicSettingsDataTypeFilterInput>
  dataRaw?: Maybe<JsonQueryOperatorInput>
  prismicId?: Maybe<IdQueryOperatorInput>
  alternate_languages?: Maybe<PrismicAlternateLanguageTypeFilterListInput>
  first_publication_date?: Maybe<DateQueryOperatorInput>
  href?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  last_publication_date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  _previewable?: Maybe<IdQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicSettingsArgs = {
  filter?: Maybe<PrismicSettingsFilterInput>
  sort?: Maybe<PrismicSettingsSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryLocalSearchAllContentArgs = {
  name?: Maybe<StringQueryOperatorInput>
  engine?: Maybe<StringQueryOperatorInput>
  index?: Maybe<StringQueryOperatorInput>
  store?: Maybe<JsonQueryOperatorInput>
  publicIndexURL?: Maybe<StringQueryOperatorInput>
  publicStoreURL?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllLocalSearchAllContentArgs = {
  filter?: Maybe<LocalSearchAllContentFilterInput>
  sort?: Maybe<LocalSearchAllContentSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>
  sort?: Maybe<SitePluginSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>
  sort?: Maybe<SiteBuildMetadataSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>
  siteMetadata?: Maybe<SiteSiteMetadata>
  port?: Maybe<Scalars['Int']>
  host?: Maybe<Scalars['String']>
  polyfill?: Maybe<Scalars['Boolean']>
  pathPrefix?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SiteBuildMetadata = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  buildTime?: Maybe<Scalars['Date']>
}

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SiteBuildMetadataGroupConnection>
}

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>
  node: SiteBuildMetadata
  previous?: Maybe<SiteBuildMetadata>
}

export enum SiteBuildMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  BuildTime = 'buildTime',
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SiteGroupConnection>
}

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SiteFieldsEnum
}

export type SiteEdge = {
  next?: Maybe<Site>
  node: Site
  previous?: Maybe<Site>
}

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataTitleShort = 'siteMetadata___titleShort',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<IntQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type SiteFunction = Node & {
  functionRoute: Scalars['String']
  pluginName: Scalars['String']
  originalAbsoluteFilePath: Scalars['String']
  originalRelativeFilePath: Scalars['String']
  relativeCompiledFilePath: Scalars['String']
  absoluteCompiledFilePath: Scalars['String']
  matchPath?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SiteFunctionConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteFunctionEdge>
  nodes: Array<SiteFunction>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SiteFunctionGroupConnection>
}

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>
  node: SiteFunction
  previous?: Maybe<SiteFunction>
}

export enum SiteFunctionFieldsEnum {
  FunctionRoute = 'functionRoute',
  PluginName = 'pluginName',
  OriginalAbsoluteFilePath = 'originalAbsoluteFilePath',
  OriginalRelativeFilePath = 'originalRelativeFilePath',
  RelativeCompiledFilePath = 'relativeCompiledFilePath',
  AbsoluteCompiledFilePath = 'absoluteCompiledFilePath',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type SiteFunctionFilterInput = {
  functionRoute?: Maybe<StringQueryOperatorInput>
  pluginName?: Maybe<StringQueryOperatorInput>
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteFunctionEdge>
  nodes: Array<SiteFunction>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePage = Node & {
  path: Scalars['String']
  component: Scalars['String']
  internalComponentName: Scalars['String']
  componentChunkName: Scalars['String']
  matchPath?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>
  context?: Maybe<SitePageContext>
  pluginCreator?: Maybe<SitePlugin>
  pluginCreatorId?: Maybe<Scalars['String']>
}

export type SitePageConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SitePageGroupConnection>
}

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SitePageFieldsEnum
}

export type SitePageContext = {
  uid?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  numPages?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
  total?: Maybe<Scalars['Int']>
  nextUID?: Maybe<Scalars['String']>
  prevUID?: Maybe<Scalars['String']>
}

export type SitePageContextFilterInput = {
  uid?: Maybe<StringQueryOperatorInput>
  limit?: Maybe<IntQueryOperatorInput>
  skip?: Maybe<IntQueryOperatorInput>
  numPages?: Maybe<IntQueryOperatorInput>
  currentPage?: Maybe<IntQueryOperatorInput>
  total?: Maybe<IntQueryOperatorInput>
  nextUID?: Maybe<StringQueryOperatorInput>
  prevUID?: Maybe<StringQueryOperatorInput>
}

export type SitePageEdge = {
  next?: Maybe<SitePage>
  node: SitePage
  previous?: Maybe<SitePage>
}

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextUid = 'context___uid',
  ContextLimit = 'context___limit',
  ContextSkip = 'context___skip',
  ContextNumPages = 'context___numPages',
  ContextCurrentPage = 'context___currentPage',
  ContextTotal = 'context___total',
  ContextNextUid = 'context___nextUID',
  ContextPrevUid = 'context___prevUID',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsOutput = 'pluginCreator___pluginOptions___output',
  PluginCreatorPluginOptionsCreateLinkInHead = 'pluginCreator___pluginOptions___createLinkInHead',
  PluginCreatorPluginOptionsEntryLimit = 'pluginCreator___pluginOptions___entryLimit',
  PluginCreatorPluginOptionsQuery = 'pluginCreator___pluginOptions___query',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsLegacy = 'pluginCreator___pluginOptions___legacy',
  PluginCreatorPluginOptionsThemeColorInHead = 'pluginCreator___pluginOptions___theme_color_in_head',
  PluginCreatorPluginOptionsCacheBustingMode = 'pluginCreator___pluginOptions___cache_busting_mode',
  PluginCreatorPluginOptionsCrossOrigin = 'pluginCreator___pluginOptions___crossOrigin',
  PluginCreatorPluginOptionsIncludeFavicon = 'pluginCreator___pluginOptions___include_favicon',
  PluginCreatorPluginOptionsCacheDigest = 'pluginCreator___pluginOptions___cacheDigest',
  PluginCreatorPluginOptionsTypekitId = 'pluginCreator___pluginOptions___typekit___id',
  PluginCreatorPluginOptionsGoogleFamilies = 'pluginCreator___pluginOptions___google___families',
  PluginCreatorPluginOptionsRepositoryName = 'pluginCreator___pluginOptions___repositoryName',
  PluginCreatorPluginOptionsAccessToken = 'pluginCreator___pluginOptions___accessToken',
  PluginCreatorPluginOptionsFetchLinks = 'pluginCreator___pluginOptions___fetchLinks',
  PluginCreatorPluginOptionsApiEndpoint = 'pluginCreator___pluginOptions___apiEndpoint',
  PluginCreatorPluginOptionsLang = 'pluginCreator___pluginOptions___lang',
  PluginCreatorPluginOptionsImageImgixParamsAuto = 'pluginCreator___pluginOptions___imageImgixParams___auto',
  PluginCreatorPluginOptionsImageImgixParamsFit = 'pluginCreator___pluginOptions___imageImgixParams___fit',
  PluginCreatorPluginOptionsImageImgixParamsQ = 'pluginCreator___pluginOptions___imageImgixParams___q',
  PluginCreatorPluginOptionsImagePlaceholderImgixParamsW = 'pluginCreator___pluginOptions___imagePlaceholderImgixParams___w',
  PluginCreatorPluginOptionsImagePlaceholderImgixParamsBlur = 'pluginCreator___pluginOptions___imagePlaceholderImgixParams___blur',
  PluginCreatorPluginOptionsPromptForAccessToken = 'pluginCreator___pluginOptions___promptForAccessToken',
  PluginCreatorPluginOptionsToolbar = 'pluginCreator___pluginOptions___toolbar',
  PluginCreatorPluginOptionsEngine = 'pluginCreator___pluginOptions___engine',
  PluginCreatorPluginOptionsRef = 'pluginCreator___pluginOptions___ref',
  PluginCreatorPluginOptionsStore = 'pluginCreator___pluginOptions___store',
  PluginCreatorPluginOptionsIndex = 'pluginCreator___pluginOptions___index',
  PluginCreatorPluginOptionsFeeds = 'pluginCreator___pluginOptions___feeds',
  PluginCreatorPluginOptionsFeedsTitle = 'pluginCreator___pluginOptions___feeds___title',
  PluginCreatorPluginOptionsFeedsOutput = 'pluginCreator___pluginOptions___feeds___output',
  PluginCreatorPluginOptionsFeedsQuery = 'pluginCreator___pluginOptions___feeds___query',
  PluginCreatorPluginOptionsHeadersX = 'pluginCreator___pluginOptions___headers____x',
  PluginCreatorPluginOptionsMergeSecurityHeaders = 'pluginCreator___pluginOptions___mergeSecurityHeaders',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorPluginOptionsAllExtensions = 'pluginCreator___pluginOptions___allExtensions',
  PluginCreatorPluginOptionsIsTsx = 'pluginCreator___pluginOptions___isTSX',
  PluginCreatorPluginOptionsJsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
}

export type SitePageGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  resolve?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  pluginOptions?: Maybe<SitePluginPluginOptions>
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  pluginFilepath?: Maybe<Scalars['String']>
  packageJson?: Maybe<SitePluginPackageJson>
}

export type SitePluginConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SitePluginGroupConnection>
}

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>
  node: SitePlugin
  previous?: Maybe<SitePlugin>
}

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsOutput = 'pluginOptions___output',
  PluginOptionsCreateLinkInHead = 'pluginOptions___createLinkInHead',
  PluginOptionsEntryLimit = 'pluginOptions___entryLimit',
  PluginOptionsQuery = 'pluginOptions___query',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsLegacy = 'pluginOptions___legacy',
  PluginOptionsThemeColorInHead = 'pluginOptions___theme_color_in_head',
  PluginOptionsCacheBustingMode = 'pluginOptions___cache_busting_mode',
  PluginOptionsCrossOrigin = 'pluginOptions___crossOrigin',
  PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
  PluginOptionsCacheDigest = 'pluginOptions___cacheDigest',
  PluginOptionsTypekitId = 'pluginOptions___typekit___id',
  PluginOptionsGoogleFamilies = 'pluginOptions___google___families',
  PluginOptionsRepositoryName = 'pluginOptions___repositoryName',
  PluginOptionsAccessToken = 'pluginOptions___accessToken',
  PluginOptionsFetchLinks = 'pluginOptions___fetchLinks',
  PluginOptionsApiEndpoint = 'pluginOptions___apiEndpoint',
  PluginOptionsLang = 'pluginOptions___lang',
  PluginOptionsImageImgixParamsAuto = 'pluginOptions___imageImgixParams___auto',
  PluginOptionsImageImgixParamsFit = 'pluginOptions___imageImgixParams___fit',
  PluginOptionsImageImgixParamsQ = 'pluginOptions___imageImgixParams___q',
  PluginOptionsImagePlaceholderImgixParamsW = 'pluginOptions___imagePlaceholderImgixParams___w',
  PluginOptionsImagePlaceholderImgixParamsBlur = 'pluginOptions___imagePlaceholderImgixParams___blur',
  PluginOptionsPromptForAccessToken = 'pluginOptions___promptForAccessToken',
  PluginOptionsToolbar = 'pluginOptions___toolbar',
  PluginOptionsEngine = 'pluginOptions___engine',
  PluginOptionsRef = 'pluginOptions___ref',
  PluginOptionsStore = 'pluginOptions___store',
  PluginOptionsIndex = 'pluginOptions___index',
  PluginOptionsFeeds = 'pluginOptions___feeds',
  PluginOptionsFeedsTitle = 'pluginOptions___feeds___title',
  PluginOptionsFeedsOutput = 'pluginOptions___feeds___output',
  PluginOptionsFeedsQuery = 'pluginOptions___feeds___query',
  PluginOptionsHeadersX = 'pluginOptions___headers____x',
  PluginOptionsMergeSecurityHeaders = 'pluginOptions___mergeSecurityHeaders',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
  PluginOptionsIsTsx = 'pluginOptions___isTSX',
  PluginOptionsJsxPragma = 'pluginOptions___jsxPragma',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords',
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  main?: Maybe<Scalars['String']>
  license?: Maybe<Scalars['String']>
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>
}

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
}

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  main?: Maybe<StringQueryOperatorInput>
  license?: Maybe<StringQueryOperatorInput>
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>
  keywords?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
}

export type SitePluginPluginOptions = {
  output?: Maybe<Scalars['String']>
  createLinkInHead?: Maybe<Scalars['Boolean']>
  entryLimit?: Maybe<Scalars['Int']>
  query?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  short_name?: Maybe<Scalars['String']>
  start_url?: Maybe<Scalars['String']>
  background_color?: Maybe<Scalars['String']>
  theme_color?: Maybe<Scalars['String']>
  display?: Maybe<Scalars['String']>
  icon?: Maybe<Scalars['String']>
  legacy?: Maybe<Scalars['Boolean']>
  theme_color_in_head?: Maybe<Scalars['Boolean']>
  cache_busting_mode?: Maybe<Scalars['String']>
  crossOrigin?: Maybe<Scalars['String']>
  include_favicon?: Maybe<Scalars['Boolean']>
  cacheDigest?: Maybe<Scalars['String']>
  typekit?: Maybe<SitePluginPluginOptionsTypekit>
  google?: Maybe<SitePluginPluginOptionsGoogle>
  repositoryName?: Maybe<Scalars['String']>
  accessToken?: Maybe<Scalars['String']>
  schemas?: Maybe<SitePluginPluginOptionsSchemas>
  fetchLinks?: Maybe<Array<Maybe<Scalars['String']>>>
  apiEndpoint?: Maybe<Scalars['String']>
  lang?: Maybe<Scalars['String']>
  imageImgixParams?: Maybe<SitePluginPluginOptionsImageImgixParams>
  imagePlaceholderImgixParams?: Maybe<SitePluginPluginOptionsImagePlaceholderImgixParams>
  promptForAccessToken?: Maybe<Scalars['Boolean']>
  toolbar?: Maybe<Scalars['String']>
  engine?: Maybe<Scalars['String']>
  ref?: Maybe<Scalars['String']>
  store?: Maybe<Array<Maybe<Scalars['String']>>>
  index?: Maybe<Array<Maybe<Scalars['String']>>>
  feeds?: Maybe<Array<Maybe<SitePluginPluginOptionsFeeds>>>
  headers?: Maybe<SitePluginPluginOptionsHeaders>
  mergeSecurityHeaders?: Maybe<Scalars['Boolean']>
  path?: Maybe<Scalars['String']>
  pathCheck?: Maybe<Scalars['Boolean']>
  allExtensions?: Maybe<Scalars['Boolean']>
  isTSX?: Maybe<Scalars['Boolean']>
  jsxPragma?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsFeeds = {
  title?: Maybe<Scalars['String']>
  output?: Maybe<Scalars['String']>
  query?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsFeedsFilterInput = {
  title?: Maybe<StringQueryOperatorInput>
  output?: Maybe<StringQueryOperatorInput>
  query?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsFeedsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsFeedsFilterInput>
}

export type SitePluginPluginOptionsFilterInput = {
  output?: Maybe<StringQueryOperatorInput>
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>
  entryLimit?: Maybe<IntQueryOperatorInput>
  query?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  short_name?: Maybe<StringQueryOperatorInput>
  start_url?: Maybe<StringQueryOperatorInput>
  background_color?: Maybe<StringQueryOperatorInput>
  theme_color?: Maybe<StringQueryOperatorInput>
  display?: Maybe<StringQueryOperatorInput>
  icon?: Maybe<StringQueryOperatorInput>
  legacy?: Maybe<BooleanQueryOperatorInput>
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>
  cache_busting_mode?: Maybe<StringQueryOperatorInput>
  crossOrigin?: Maybe<StringQueryOperatorInput>
  include_favicon?: Maybe<BooleanQueryOperatorInput>
  cacheDigest?: Maybe<StringQueryOperatorInput>
  typekit?: Maybe<SitePluginPluginOptionsTypekitFilterInput>
  google?: Maybe<SitePluginPluginOptionsGoogleFilterInput>
  repositoryName?: Maybe<StringQueryOperatorInput>
  accessToken?: Maybe<StringQueryOperatorInput>
  schemas?: Maybe<SitePluginPluginOptionsSchemasFilterInput>
  fetchLinks?: Maybe<StringQueryOperatorInput>
  apiEndpoint?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  imageImgixParams?: Maybe<SitePluginPluginOptionsImageImgixParamsFilterInput>
  imagePlaceholderImgixParams?: Maybe<SitePluginPluginOptionsImagePlaceholderImgixParamsFilterInput>
  promptForAccessToken?: Maybe<BooleanQueryOperatorInput>
  toolbar?: Maybe<StringQueryOperatorInput>
  engine?: Maybe<StringQueryOperatorInput>
  ref?: Maybe<StringQueryOperatorInput>
  store?: Maybe<StringQueryOperatorInput>
  index?: Maybe<StringQueryOperatorInput>
  feeds?: Maybe<SitePluginPluginOptionsFeedsFilterListInput>
  headers?: Maybe<SitePluginPluginOptionsHeadersFilterInput>
  mergeSecurityHeaders?: Maybe<BooleanQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  pathCheck?: Maybe<BooleanQueryOperatorInput>
  allExtensions?: Maybe<BooleanQueryOperatorInput>
  isTSX?: Maybe<BooleanQueryOperatorInput>
  jsxPragma?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsGoogle = {
  families?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type SitePluginPluginOptionsGoogleFilterInput = {
  families?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsHeaders = {
  _x?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type SitePluginPluginOptionsHeadersFilterInput = {
  _x?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsImageImgixParams = {
  auto?: Maybe<Scalars['String']>
  fit?: Maybe<Scalars['String']>
  q?: Maybe<Scalars['Int']>
}

export type SitePluginPluginOptionsImageImgixParamsFilterInput = {
  auto?: Maybe<StringQueryOperatorInput>
  fit?: Maybe<StringQueryOperatorInput>
  q?: Maybe<IntQueryOperatorInput>
}

export type SitePluginPluginOptionsImagePlaceholderImgixParams = {
  w?: Maybe<Scalars['Int']>
  blur?: Maybe<Scalars['Int']>
}

export type SitePluginPluginOptionsImagePlaceholderImgixParamsFilterInput = {
  w?: Maybe<IntQueryOperatorInput>
  blur?: Maybe<IntQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemas = {
  cohort?: Maybe<SitePluginPluginOptionsSchemasCohort>
  cohort_schedule?: Maybe<SitePluginPluginOptionsSchemasCohort_Schedule>
  fellow?: Maybe<SitePluginPluginOptionsSchemasFellow>
  interior_page?: Maybe<SitePluginPluginOptionsSchemasInterior_Page>
  navigation?: Maybe<SitePluginPluginOptionsSchemasNavigation>
  news_category?: Maybe<SitePluginPluginOptionsSchemasNews_Category>
  news_post?: Maybe<SitePluginPluginOptionsSchemasNews_Post>
  page?: Maybe<SitePluginPluginOptionsSchemasPage>
  project?: Maybe<SitePluginPluginOptionsSchemasProject>
  project_category?: Maybe<SitePluginPluginOptionsSchemasProject_Category>
  settings?: Maybe<SitePluginPluginOptionsSchemasSettings>
}

export type SitePluginPluginOptionsSchemasCohort = {
  Main?: Maybe<SitePluginPluginOptionsSchemasCohortMain>
}

export type SitePluginPluginOptionsSchemasCohortFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasCohortMainFilterInput>
}

export type SitePluginPluginOptionsSchemasCohortMain = {
  title?: Maybe<SitePluginPluginOptionsSchemasCohortMainTitle>
  uid?: Maybe<SitePluginPluginOptionsSchemasCohortMainUid>
  cohort_number?: Maybe<SitePluginPluginOptionsSchemasCohortMainCohort_Number>
}

export type SitePluginPluginOptionsSchemasCohortMainCohort_Number = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasCohortMainCohort_NumberConfig>
}

export type SitePluginPluginOptionsSchemasCohortMainCohort_NumberConfig = {
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasCohortMainCohort_NumberConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasCohortMainCohort_NumberFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasCohortMainCohort_NumberConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasCohortMainFilterInput = {
  title?: Maybe<SitePluginPluginOptionsSchemasCohortMainTitleFilterInput>
  uid?: Maybe<SitePluginPluginOptionsSchemasCohortMainUidFilterInput>
  cohort_number?: Maybe<SitePluginPluginOptionsSchemasCohortMainCohort_NumberFilterInput>
}

export type SitePluginPluginOptionsSchemasCohortMainTitle = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasCohortMainTitleConfig>
}

export type SitePluginPluginOptionsSchemasCohortMainTitleConfig = {
  single?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasCohortMainTitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>
  label?: Maybe<StringQueryOperatorInput>
  placeholder?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasCohortMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasCohortMainTitleConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasCohortMainUid = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasCohortMainUidConfig>
}

export type SitePluginPluginOptionsSchemasCohortMainUidConfig = {
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasCohortMainUidConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>
  placeholder?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasCohortMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasCohortMainUidConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasCohort_Schedule = {
  Main?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMain>
}

export type SitePluginPluginOptionsSchemasCohort_ScheduleFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainFilterInput>
}

export type SitePluginPluginOptionsSchemasCohort_ScheduleMain = {
  title?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainTitle>
  uid?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainUid>
  body?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBody>
}

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBody = {
  type?: Maybe<Scalars['String']>
  fieldset?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfig>
}

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfig = {
  choices?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoices>
}

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoices =
  {
    section?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSection>
  }

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesFilterInput =
  {
    section?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionFilterInput>
  }

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSection =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_Repeat>
    repeat?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeat>
  }

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatFilterInput>
    repeat?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_Repeat =
  {
    description_heading?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDescription_Heading>
    dates_heading?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDates_Heading>
  }

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDates_Heading =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDates_HeadingConfig>
  }

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDates_HeadingConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDates_HeadingConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDates_HeadingFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDates_HeadingConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDescription_Heading =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDescription_HeadingConfig>
  }

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDescription_HeadingConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDescription_HeadingConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDescription_HeadingFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDescription_HeadingConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatFilterInput =
  {
    description_heading?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDescription_HeadingFilterInput>
    dates_heading?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionNon_RepeatDates_HeadingFilterInput>
  }

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeat =
  {
    event_description?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_Description>
    event_date?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_Date>
  }

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_Date =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_DateConfig>
  }

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_DateConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_DateConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_DateFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_DateConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_Description =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_DescriptionConfig>
  }

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_DescriptionConfig =
  {
    multi?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_DescriptionConfigFilterInput =
  {
    multi?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_DescriptionFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_DescriptionConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatFilterInput =
  {
    event_description?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_DescriptionFilterInput>
    event_date?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesSectionRepeatEvent_DateFilterInput>
  }

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigFilterInput =
  {
    choices?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigChoicesFilterInput>
  }

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  fieldset?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainFilterInput = {
  title?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainTitleFilterInput>
  uid?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainUidFilterInput>
  body?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainBodyFilterInput>
}

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainTitle = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainTitleConfig>
}

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainTitleConfig = {
  single?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainTitleConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainTitleFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainTitleConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainUid = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainUidConfig>
}

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainUidConfig = {
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainUidConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasCohort_ScheduleMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleMainUidConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasFellow = {
  Main?: Maybe<SitePluginPluginOptionsSchemasFellowMain>
}

export type SitePluginPluginOptionsSchemasFellowFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasFellowMainFilterInput>
}

export type SitePluginPluginOptionsSchemasFellowMain = {
  name?: Maybe<SitePluginPluginOptionsSchemasFellowMainName>
  uid?: Maybe<SitePluginPluginOptionsSchemasFellowMainUid>
  cohort?: Maybe<SitePluginPluginOptionsSchemasFellowMainCohort>
  biography?: Maybe<SitePluginPluginOptionsSchemasFellowMainBiography>
  portrait?: Maybe<SitePluginPluginOptionsSchemasFellowMainPortrait>
  photo?: Maybe<SitePluginPluginOptionsSchemasFellowMainPhoto>
}

export type SitePluginPluginOptionsSchemasFellowMainBiography = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasFellowMainBiographyConfig>
}

export type SitePluginPluginOptionsSchemasFellowMainBiographyConfig = {
  multi?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasFellowMainBiographyConfigFilterInput =
  {
    multi?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasFellowMainBiographyFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasFellowMainBiographyConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasFellowMainCohort = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasFellowMainCohortConfig>
}

export type SitePluginPluginOptionsSchemasFellowMainCohortConfig = {
  select?: Maybe<Scalars['String']>
  customtypes?: Maybe<Array<Maybe<Scalars['String']>>>
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasFellowMainCohortConfigFilterInput = {
  select?: Maybe<StringQueryOperatorInput>
  customtypes?: Maybe<StringQueryOperatorInput>
  label?: Maybe<StringQueryOperatorInput>
  placeholder?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasFellowMainCohortFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasFellowMainCohortConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasFellowMainFilterInput = {
  name?: Maybe<SitePluginPluginOptionsSchemasFellowMainNameFilterInput>
  uid?: Maybe<SitePluginPluginOptionsSchemasFellowMainUidFilterInput>
  cohort?: Maybe<SitePluginPluginOptionsSchemasFellowMainCohortFilterInput>
  biography?: Maybe<SitePluginPluginOptionsSchemasFellowMainBiographyFilterInput>
  portrait?: Maybe<SitePluginPluginOptionsSchemasFellowMainPortraitFilterInput>
  photo?: Maybe<SitePluginPluginOptionsSchemasFellowMainPhotoFilterInput>
}

export type SitePluginPluginOptionsSchemasFellowMainName = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasFellowMainNameConfig>
}

export type SitePluginPluginOptionsSchemasFellowMainNameConfig = {
  single?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasFellowMainNameConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>
  label?: Maybe<StringQueryOperatorInput>
  placeholder?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasFellowMainNameFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasFellowMainNameConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasFellowMainPhoto = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasFellowMainPhotoConfig>
}

export type SitePluginPluginOptionsSchemasFellowMainPhotoConfig = {
  label?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasFellowMainPhotoConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasFellowMainPhotoFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasFellowMainPhotoConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasFellowMainPortrait = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasFellowMainPortraitConfig>
}

export type SitePluginPluginOptionsSchemasFellowMainPortraitConfig = {
  label?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasFellowMainPortraitConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasFellowMainPortraitFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasFellowMainPortraitConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasFellowMainUid = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasFellowMainUidConfig>
}

export type SitePluginPluginOptionsSchemasFellowMainUidConfig = {
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasFellowMainUidConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>
  placeholder?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasFellowMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasFellowMainUidConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasFilterInput = {
  cohort?: Maybe<SitePluginPluginOptionsSchemasCohortFilterInput>
  cohort_schedule?: Maybe<SitePluginPluginOptionsSchemasCohort_ScheduleFilterInput>
  fellow?: Maybe<SitePluginPluginOptionsSchemasFellowFilterInput>
  interior_page?: Maybe<SitePluginPluginOptionsSchemasInterior_PageFilterInput>
  navigation?: Maybe<SitePluginPluginOptionsSchemasNavigationFilterInput>
  news_category?: Maybe<SitePluginPluginOptionsSchemasNews_CategoryFilterInput>
  news_post?: Maybe<SitePluginPluginOptionsSchemasNews_PostFilterInput>
  page?: Maybe<SitePluginPluginOptionsSchemasPageFilterInput>
  project?: Maybe<SitePluginPluginOptionsSchemasProjectFilterInput>
  project_category?: Maybe<SitePluginPluginOptionsSchemasProject_CategoryFilterInput>
  settings?: Maybe<SitePluginPluginOptionsSchemasSettingsFilterInput>
}

export type SitePluginPluginOptionsSchemasInterior_Page = {
  Main?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMain>
  Header?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeader>
  Body?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBody>
}

export type SitePluginPluginOptionsSchemasInterior_PageBody = {
  body?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBody>
}

export type SitePluginPluginOptionsSchemasInterior_PageBodyBody = {
  type?: Maybe<Scalars['String']>
  fieldset?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfig>
}

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfig = {
  choices?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoices>
}

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoices = {
  text_intro?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_Intro>
  text?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText>
  images?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImages>
  video?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideo>
  link_card?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesLink_Card>
  divider?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesDivider>
  anchor?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchor>
  cohort_schedule?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_Schedule>
  staff_directory?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_Directory>
}

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchor =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchorNon_Repeat>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchorFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchorNon_RepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchorNon_Repeat =
  {
    id?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchorNon_RepeatId>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchorNon_RepeatFilterInput =
  {
    id?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchorNon_RepeatIdFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchorNon_RepeatId =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchorNon_RepeatIdConfig>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchorNon_RepeatIdConfig =
  {
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchorNon_RepeatIdConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchorNon_RepeatIdFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchorNon_RepeatIdConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_Schedule =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_ScheduleNon_Repeat>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_ScheduleFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_ScheduleNon_RepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_ScheduleNon_Repeat =
  {
    cohort_schedule?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_ScheduleNon_RepeatCohort_Schedule>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_ScheduleNon_RepeatCohort_Schedule =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_ScheduleNon_RepeatCohort_ScheduleConfig>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_ScheduleNon_RepeatCohort_ScheduleConfig =
  {
    select?: Maybe<Scalars['String']>
    customtypes?: Maybe<Array<Maybe<Scalars['String']>>>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_ScheduleNon_RepeatCohort_ScheduleConfigFilterInput =
  {
    select?: Maybe<StringQueryOperatorInput>
    customtypes?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_ScheduleNon_RepeatCohort_ScheduleFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_ScheduleNon_RepeatCohort_ScheduleConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_ScheduleNon_RepeatFilterInput =
  {
    cohort_schedule?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_ScheduleNon_RepeatCohort_ScheduleFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesDivider =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesDividerFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesFilterInput =
  {
    text_intro?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_IntroFilterInput>
    text?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesTextFilterInput>
    images?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesFilterInput>
    video?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoFilterInput>
    link_card?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesLink_CardFilterInput>
    divider?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesDividerFilterInput>
    anchor?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesAnchorFilterInput>
    cohort_schedule?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesCohort_ScheduleFilterInput>
    staff_directory?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImages =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeat>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeat =
  {
    image?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatImage>
    caption?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatCaption>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatCaption =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatCaptionConfig>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatCaptionConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatCaptionConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatCaptionFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatCaptionConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatFilterInput =
  {
    image?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatImageFilterInput>
    caption?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatCaptionFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatImage =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatImageConfig>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatImageConfig =
  {
    constraint?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatImageConfigConstraint>
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatImageConfigConstraint =
  {
    width?: Maybe<Scalars['Int']>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatImageConfigConstraintFilterInput =
  {
    width?: Maybe<IntQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatImageConfigFilterInput =
  {
    constraint?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatImageConfigConstraintFilterInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatImageFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesImagesRepeatImageConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesLink_Card =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesLink_CardNon_Repeat>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesLink_CardFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesLink_CardNon_RepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesLink_CardNon_Repeat =
  {
    link_title?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesLink_CardNon_RepeatLink_Title>
    link?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesLink_CardNon_RepeatLink>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesLink_CardNon_RepeatFilterInput =
  {
    link_title?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesLink_CardNon_RepeatLink_TitleFilterInput>
    link?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesLink_CardNon_RepeatLinkFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesLink_CardNon_RepeatLink =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesLink_CardNon_RepeatLinkConfig>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesLink_CardNon_RepeatLinkConfig =
  {
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesLink_CardNon_RepeatLinkConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesLink_CardNon_RepeatLinkFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesLink_CardNon_RepeatLinkConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesLink_CardNon_RepeatLink_Title =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesLink_CardNon_RepeatLink_TitleConfig>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesLink_CardNon_RepeatLink_TitleConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesLink_CardNon_RepeatLink_TitleConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesLink_CardNon_RepeatLink_TitleFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesLink_CardNon_RepeatLink_TitleConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_Directory =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeat>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeat =
  {
    photo?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatPhoto>
    name?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatName>
    staff_title?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatStaff_Title>
    biography?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatBiography>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatBiography =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatBiographyConfig>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatBiographyConfig =
  {
    multi?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatBiographyConfigFilterInput =
  {
    multi?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatBiographyFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatBiographyConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatFilterInput =
  {
    photo?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatPhotoFilterInput>
    name?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatNameFilterInput>
    staff_title?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatStaff_TitleFilterInput>
    biography?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatBiographyFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatName =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatNameConfig>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatNameConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatNameConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatNameFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatNameConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatPhoto =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatPhotoConfig>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatPhotoConfig =
  {
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatPhotoConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatPhotoFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatPhotoConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatStaff_Title =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatStaff_TitleConfig>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatStaff_TitleConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatStaff_TitleConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatStaff_TitleFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesStaff_DirectoryRepeatStaff_TitleConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesTextNon_Repeat>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesTextFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesTextNon_RepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesTextNon_Repeat =
  {
    text?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesTextNon_RepeatText>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesTextNon_RepeatFilterInput =
  {
    text?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesTextNon_RepeatTextFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesTextNon_RepeatText =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesTextNon_RepeatTextConfig>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesTextNon_RepeatTextConfig =
  {
    multi?: Maybe<Scalars['String']>
    allowTargetBlank?: Maybe<Scalars['Boolean']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesTextNon_RepeatTextConfigFilterInput =
  {
    multi?: Maybe<StringQueryOperatorInput>
    allowTargetBlank?: Maybe<BooleanQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesTextNon_RepeatTextFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesTextNon_RepeatTextConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_Intro =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_IntroNon_Repeat>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_IntroFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_IntroNon_RepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_IntroNon_Repeat =
  {
    introductory_text?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_Text>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_IntroNon_RepeatFilterInput =
  {
    introductory_text?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_TextFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_Text =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_TextConfig>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_TextConfig =
  {
    multi?: Maybe<Scalars['String']>
    allowTargetBlank?: Maybe<Scalars['Boolean']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_TextConfigFilterInput =
  {
    multi?: Maybe<StringQueryOperatorInput>
    allowTargetBlank?: Maybe<BooleanQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_TextFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_TextConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideo =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_Repeat>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_Repeat =
  {
    video?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatVideo>
    poster?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatPoster>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatFilterInput =
  {
    video?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatVideoFilterInput>
    poster?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatPosterFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatPoster =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatPosterConfig>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatPosterConfig =
  {
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatPosterConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatPosterFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatPosterConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatVideo =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatVideoConfig>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatVideoConfig =
  {
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatVideoConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatVideoFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesVideoNon_RepeatVideoConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigFilterInput =
  {
    choices?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigChoicesFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageBodyBodyFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  fieldset?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasInterior_PageBodyFilterInput = {
  body?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyBodyFilterInput>
}

export type SitePluginPluginOptionsSchemasInterior_PageFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainFilterInput>
  Header?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderFilterInput>
  Body?: Maybe<SitePluginPluginOptionsSchemasInterior_PageBodyFilterInput>
}

export type SitePluginPluginOptionsSchemasInterior_PageHeader = {
  header?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeader>
}

export type SitePluginPluginOptionsSchemasInterior_PageHeaderFilterInput = {
  header?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderFilterInput>
}

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeader = {
  type?: Maybe<Scalars['String']>
  fieldset?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfig>
}

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfig = {
  choices?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoices>
}

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoices =
  {
    hero_image?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_Image>
  }

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesFilterInput =
  {
    hero_image?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_Image =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_Repeat>
  }

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_Repeat =
  {
    heading?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatHeading>
    background_image?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatBackground_Image>
  }

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatBackground_Image =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatBackground_ImageConfig>
  }

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatBackground_ImageConfig =
  {
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatBackground_ImageConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatBackground_ImageFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatBackground_ImageConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatFilterInput =
  {
    heading?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatHeadingFilterInput>
    background_image?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatBackground_ImageFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatHeading =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatHeadingConfig>
  }

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatHeadingConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatHeadingConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatHeadingFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesHero_ImageNon_RepeatHeadingConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigFilterInput =
  {
    choices?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigChoicesFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageHeaderHeaderConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageMain = {
  title?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainTitle>
  uid?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainUid>
  meta_title?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainMeta_Title>
  meta_description?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainMeta_Description>
  parent?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainParent>
  redirect_to?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainRedirect_To>
  redirect_is_permanent?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainRedirect_Is_Permanent>
}

export type SitePluginPluginOptionsSchemasInterior_PageMainFilterInput = {
  title?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainTitleFilterInput>
  uid?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainUidFilterInput>
  meta_title?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainMeta_TitleFilterInput>
  meta_description?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainMeta_DescriptionFilterInput>
  parent?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainParentFilterInput>
  redirect_to?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainRedirect_ToFilterInput>
  redirect_is_permanent?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainRedirect_Is_PermanentFilterInput>
}

export type SitePluginPluginOptionsSchemasInterior_PageMainMeta_Description = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainMeta_DescriptionConfig>
}

export type SitePluginPluginOptionsSchemasInterior_PageMainMeta_DescriptionConfig =
  {
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasInterior_PageMainMeta_DescriptionConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageMainMeta_DescriptionFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainMeta_DescriptionConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageMainMeta_Title = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainMeta_TitleConfig>
}

export type SitePluginPluginOptionsSchemasInterior_PageMainMeta_TitleConfig = {
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasInterior_PageMainMeta_TitleConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageMainMeta_TitleFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainMeta_TitleConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageMainParent = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainParentConfig>
}

export type SitePluginPluginOptionsSchemasInterior_PageMainParentConfig = {
  select?: Maybe<Scalars['String']>
  customtypes?: Maybe<Array<Maybe<Scalars['String']>>>
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasInterior_PageMainParentConfigFilterInput =
  {
    select?: Maybe<StringQueryOperatorInput>
    customtypes?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageMainParentFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainParentConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasInterior_PageMainRedirect_Is_Permanent =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainRedirect_Is_PermanentConfig>
  }

export type SitePluginPluginOptionsSchemasInterior_PageMainRedirect_Is_PermanentConfig =
  {
    placeholder_false?: Maybe<Scalars['String']>
    placeholder_true?: Maybe<Scalars['String']>
    default_value?: Maybe<Scalars['Boolean']>
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasInterior_PageMainRedirect_Is_PermanentConfigFilterInput =
  {
    placeholder_false?: Maybe<StringQueryOperatorInput>
    placeholder_true?: Maybe<StringQueryOperatorInput>
    default_value?: Maybe<BooleanQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageMainRedirect_Is_PermanentFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainRedirect_Is_PermanentConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageMainRedirect_To = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainRedirect_ToConfig>
}

export type SitePluginPluginOptionsSchemasInterior_PageMainRedirect_ToConfig = {
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasInterior_PageMainRedirect_ToConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageMainRedirect_ToFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainRedirect_ToConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageMainTitle = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainTitleConfig>
}

export type SitePluginPluginOptionsSchemasInterior_PageMainTitleConfig = {
  single?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasInterior_PageMainTitleConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainTitleConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasInterior_PageMainUid = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainUidConfig>
}

export type SitePluginPluginOptionsSchemasInterior_PageMainUidConfig = {
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasInterior_PageMainUidConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasInterior_PageMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasInterior_PageMainUidConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasNavigation = {
  Main?: Maybe<SitePluginPluginOptionsSchemasNavigationMain>
}

export type SitePluginPluginOptionsSchemasNavigationFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasNavigationMainFilterInput>
}

export type SitePluginPluginOptionsSchemasNavigationMain = {
  title?: Maybe<SitePluginPluginOptionsSchemasNavigationMainTitle>
  uid?: Maybe<SitePluginPluginOptionsSchemasNavigationMainUid>
  main?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMain>
}

export type SitePluginPluginOptionsSchemasNavigationMainFilterInput = {
  title?: Maybe<SitePluginPluginOptionsSchemasNavigationMainTitleFilterInput>
  uid?: Maybe<SitePluginPluginOptionsSchemasNavigationMainUidFilterInput>
  main?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainFilterInput>
}

export type SitePluginPluginOptionsSchemasNavigationMainMain = {
  type?: Maybe<Scalars['String']>
  fieldset?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfig>
}

export type SitePluginPluginOptionsSchemasNavigationMainMainConfig = {
  choices?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoices>
}

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoices = {
  nav_item?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_Item>
}

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesFilterInput =
  {
    nav_item?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemFilterInput>
  }

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_Item =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_Repeat>
    repeat?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeat>
  }

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatFilterInput>
    repeat?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_Repeat =
  {
    name?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatName>
    link?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatLink>
  }

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatFilterInput =
  {
    name?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatNameFilterInput>
    link?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatLinkFilterInput>
  }

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatLink =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatLinkConfig>
  }

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatLinkConfig =
  {
    allowTargetBlank?: Maybe<Scalars['Boolean']>
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatLinkConfigFilterInput =
  {
    allowTargetBlank?: Maybe<BooleanQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatLinkFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatLinkConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatName =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatNameConfig>
  }

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatNameConfig =
  {
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatNameConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatNameFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemNon_RepeatNameConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeat =
  {
    name?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatName>
    link?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatLink>
  }

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatFilterInput =
  {
    name?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatNameFilterInput>
    link?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatLinkFilterInput>
  }

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatLink =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatLinkConfig>
  }

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatLinkConfig =
  {
    allowTargetBlank?: Maybe<Scalars['Boolean']>
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatLinkConfigFilterInput =
  {
    allowTargetBlank?: Maybe<BooleanQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatLinkFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatLinkConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatName =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatNameConfig>
  }

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatNameConfig =
  {
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatNameConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatNameFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesNav_ItemRepeatNameConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasNavigationMainMainConfigFilterInput =
  {
    choices?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigChoicesFilterInput>
  }

export type SitePluginPluginOptionsSchemasNavigationMainMainFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  fieldset?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainMainConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasNavigationMainTitle = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainTitleConfig>
}

export type SitePluginPluginOptionsSchemasNavigationMainTitleConfig = {
  single?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasNavigationMainTitleConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasNavigationMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainTitleConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasNavigationMainUid = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainUidConfig>
}

export type SitePluginPluginOptionsSchemasNavigationMainUidConfig = {
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasNavigationMainUidConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>
  placeholder?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasNavigationMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainUidConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasNews_Category = {
  Main?: Maybe<SitePluginPluginOptionsSchemasNews_CategoryMain>
}

export type SitePluginPluginOptionsSchemasNews_CategoryFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasNews_CategoryMainFilterInput>
}

export type SitePluginPluginOptionsSchemasNews_CategoryMain = {
  name?: Maybe<SitePluginPluginOptionsSchemasNews_CategoryMainName>
  uid?: Maybe<SitePluginPluginOptionsSchemasNews_CategoryMainUid>
}

export type SitePluginPluginOptionsSchemasNews_CategoryMainFilterInput = {
  name?: Maybe<SitePluginPluginOptionsSchemasNews_CategoryMainNameFilterInput>
  uid?: Maybe<SitePluginPluginOptionsSchemasNews_CategoryMainUidFilterInput>
}

export type SitePluginPluginOptionsSchemasNews_CategoryMainName = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasNews_CategoryMainNameConfig>
}

export type SitePluginPluginOptionsSchemasNews_CategoryMainNameConfig = {
  single?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasNews_CategoryMainNameConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasNews_CategoryMainNameFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasNews_CategoryMainNameConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasNews_CategoryMainUid = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasNews_CategoryMainUidConfig>
}

export type SitePluginPluginOptionsSchemasNews_CategoryMainUidConfig = {
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasNews_CategoryMainUidConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasNews_CategoryMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasNews_CategoryMainUidConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasNews_Post = {
  Main?: Maybe<SitePluginPluginOptionsSchemasNews_PostMain>
  Body?: Maybe<SitePluginPluginOptionsSchemasNews_PostBody>
}

export type SitePluginPluginOptionsSchemasNews_PostBody = {
  body?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBody>
}

export type SitePluginPluginOptionsSchemasNews_PostBodyBody = {
  type?: Maybe<Scalars['String']>
  fieldset?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfig>
}

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfig = {
  choices?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoices>
}

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoices = {
  text_intro?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_Intro>
  text?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText>
  images?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImages>
  video?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideo>
  link_card?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_Card>
  divider?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesDivider>
  anchor?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchor>
}

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchor =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchorNon_Repeat>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchorFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchorNon_RepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchorNon_Repeat =
  {
    id?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchorNon_RepeatId>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchorNon_RepeatFilterInput =
  {
    id?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchorNon_RepeatIdFilterInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchorNon_RepeatId =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchorNon_RepeatIdConfig>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchorNon_RepeatIdConfig =
  {
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchorNon_RepeatIdConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchorNon_RepeatIdFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchorNon_RepeatIdConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesDivider =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesDividerFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesFilterInput =
  {
    text_intro?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_IntroFilterInput>
    text?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesTextFilterInput>
    images?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesFilterInput>
    video?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoFilterInput>
    link_card?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardFilterInput>
    divider?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesDividerFilterInput>
    anchor?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesAnchorFilterInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImages =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    repeat?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeat>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    repeat?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeat =
  {
    image?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatImage>
    caption?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatCaption>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatCaption =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatCaptionConfig>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatCaptionConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatCaptionConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatCaptionFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatCaptionConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatFilterInput =
  {
    image?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatImageFilterInput>
    caption?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatCaptionFilterInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatImage =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatImageConfig>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatImageConfig =
  {
    constraint?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatImageConfigConstraint>
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatImageConfigConstraint =
  {
    width?: Maybe<Scalars['Int']>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatImageConfigConstraintFilterInput =
  {
    width?: Maybe<IntQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatImageConfigFilterInput =
  {
    constraint?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatImageConfigConstraintFilterInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatImageFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesImagesRepeatImageConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_Card =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_Repeat>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_Repeat =
  {
    link_title?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLink_Title>
    link?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLink>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatFilterInput =
  {
    link_title?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLink_TitleFilterInput>
    link?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLinkFilterInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLink =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLinkConfig>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLinkConfig =
  {
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLinkConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLinkFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLinkConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLink_Title =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLink_TitleConfig>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLink_TitleConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLink_TitleConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLink_TitleFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesLink_CardNon_RepeatLink_TitleConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText = {
  type?: Maybe<Scalars['String']>
  fieldset?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  icon?: Maybe<Scalars['String']>
  display?: Maybe<Scalars['String']>
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesTextNon_Repeat>
}

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesTextFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesTextNon_RepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesTextNon_Repeat =
  {
    text?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesTextNon_RepeatText>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesTextNon_RepeatFilterInput =
  {
    text?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesTextNon_RepeatTextFilterInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesTextNon_RepeatText =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesTextNon_RepeatTextConfig>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesTextNon_RepeatTextConfig =
  {
    multi?: Maybe<Scalars['String']>
    allowTargetBlank?: Maybe<Scalars['Boolean']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesTextNon_RepeatTextConfigFilterInput =
  {
    multi?: Maybe<StringQueryOperatorInput>
    allowTargetBlank?: Maybe<BooleanQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesTextNon_RepeatTextFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesTextNon_RepeatTextConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_Intro =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_IntroNon_Repeat>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_IntroFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_IntroNon_RepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_IntroNon_Repeat =
  {
    introductory_text?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_Text>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_IntroNon_RepeatFilterInput =
  {
    introductory_text?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_TextFilterInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_Text =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_TextConfig>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_TextConfig =
  {
    multi?: Maybe<Scalars['String']>
    allowTargetBlank?: Maybe<Scalars['Boolean']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_TextConfigFilterInput =
  {
    multi?: Maybe<StringQueryOperatorInput>
    allowTargetBlank?: Maybe<BooleanQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_TextFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_TextConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideo =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_Repeat>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_Repeat =
  {
    video?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatVideo>
    poster?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatPoster>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatFilterInput =
  {
    video?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatVideoFilterInput>
    poster?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatPosterFilterInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatPoster =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatPosterConfig>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatPosterConfig =
  {
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatPosterConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatPosterFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatPosterConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatVideo =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatVideoConfig>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatVideoConfig =
  {
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatVideoConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatVideoFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesVideoNon_RepeatVideoConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigFilterInput = {
  choices?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigChoicesFilterInput>
}

export type SitePluginPluginOptionsSchemasNews_PostBodyBodyFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  fieldset?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasNews_PostBodyFilterInput = {
  body?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyBodyFilterInput>
}

export type SitePluginPluginOptionsSchemasNews_PostFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainFilterInput>
  Body?: Maybe<SitePluginPluginOptionsSchemasNews_PostBodyFilterInput>
}

export type SitePluginPluginOptionsSchemasNews_PostMain = {
  title?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainTitle>
  uid?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainUid>
  published_at?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainPublished_At>
  excerpt?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainExcerpt>
  news_categories?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainNews_Categories>
  featured_image?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainFeatured_Image>
}

export type SitePluginPluginOptionsSchemasNews_PostMainExcerpt = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainExcerptConfig>
}

export type SitePluginPluginOptionsSchemasNews_PostMainExcerptConfig = {
  single?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasNews_PostMainExcerptConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostMainExcerptFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainExcerptConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasNews_PostMainFeatured_Image = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainFeatured_ImageConfig>
}

export type SitePluginPluginOptionsSchemasNews_PostMainFeatured_ImageConfig = {
  label?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasNews_PostMainFeatured_ImageConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostMainFeatured_ImageFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainFeatured_ImageConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostMainFilterInput = {
  title?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainTitleFilterInput>
  uid?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainUidFilterInput>
  published_at?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainPublished_AtFilterInput>
  excerpt?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainExcerptFilterInput>
  news_categories?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesFilterInput>
  featured_image?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainFeatured_ImageFilterInput>
}

export type SitePluginPluginOptionsSchemasNews_PostMainNews_Categories = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfig>
}

export type SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfig = {
  fields?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfigFields>
  label?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfigFields =
  {
    news_category?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfigFieldsNews_Category>
  }

export type SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfigFieldsFilterInput =
  {
    news_category?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfigFieldsNews_CategoryFilterInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfigFieldsNews_Category =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfigFieldsNews_CategoryConfig>
  }

export type SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfigFieldsNews_CategoryConfig =
  {
    select?: Maybe<Scalars['String']>
    customtypes?: Maybe<Array<Maybe<Scalars['String']>>>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfigFieldsNews_CategoryConfigFilterInput =
  {
    select?: Maybe<StringQueryOperatorInput>
    customtypes?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfigFieldsNews_CategoryFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfigFieldsNews_CategoryConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfigFilterInput =
  {
    fields?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfigFieldsFilterInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainNews_CategoriesConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostMainPublished_At = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainPublished_AtConfig>
}

export type SitePluginPluginOptionsSchemasNews_PostMainPublished_AtConfig = {
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasNews_PostMainPublished_AtConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostMainPublished_AtFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainPublished_AtConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostMainTitle = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainTitleConfig>
}

export type SitePluginPluginOptionsSchemasNews_PostMainTitleConfig = {
  single?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasNews_PostMainTitleConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasNews_PostMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainTitleConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasNews_PostMainUid = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainUidConfig>
}

export type SitePluginPluginOptionsSchemasNews_PostMainUidConfig = {
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasNews_PostMainUidConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>
  placeholder?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasNews_PostMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasNews_PostMainUidConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasPage = {
  Main?: Maybe<SitePluginPluginOptionsSchemasPageMain>
  Body?: Maybe<SitePluginPluginOptionsSchemasPageBody>
}

export type SitePluginPluginOptionsSchemasPageBody = {
  body?: Maybe<SitePluginPluginOptionsSchemasPageBodyBody>
}

export type SitePluginPluginOptionsSchemasPageBodyBody = {
  type?: Maybe<Scalars['String']>
  fieldset?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfig>
}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfig = {
  choices?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoices>
}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoices = {
  text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText>
  anchor?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchor>
  hero_image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image>
  hero_image_carousel?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_Carousel>
  quote_slideshow?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_Slideshow>
  learning_excursion_map?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_Map>
  fellows_grid?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFellows_Grid>
  image_carousel?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImage_Carousel>
  link_collection?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_Collection>
  headshot_quote?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_Quote>
  calls_to_action?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_Action>
}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchor = {
  type?: Maybe<Scalars['String']>
  fieldset?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  icon?: Maybe<Scalars['String']>
  display?: Maybe<Scalars['String']>
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_Repeat>
}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_Repeat =
  {
    id?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatId>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatFilterInput =
  {
    id?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatIdFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatId =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatIdConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatIdConfig =
  {
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatIdConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatIdFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatIdConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_Action =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeat>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeat =
  {
    background_image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatBackground_Image>
    label?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatLabel>
    text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatText>
    button_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatButton_Text>
    button_link?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatButton_Link>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatBackground_Image =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatBackground_ImageConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatBackground_ImageConfig =
  {
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatBackground_ImageConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatBackground_ImageFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatBackground_ImageConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatButton_Link =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatButton_LinkConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatButton_LinkConfig =
  {
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatButton_LinkConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatButton_LinkFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatButton_LinkConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatButton_Text =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatButton_TextConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatButton_TextConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatButton_TextConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatButton_TextFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatButton_TextConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatFilterInput =
  {
    background_image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatBackground_ImageFilterInput>
    label?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatLabelFilterInput>
    text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatTextFilterInput>
    button_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatButton_TextFilterInput>
    button_link?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatButton_LinkFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatLabel =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatLabelConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatLabelConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatLabelConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatLabelFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatLabelConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatText =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatTextConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatTextConfig =
  {
    multi?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatTextConfigFilterInput =
  {
    multi?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatTextFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionRepeatTextConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFellows_Grid =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFellows_GridFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterInput =
  {
    text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextFilterInput>
    anchor?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorFilterInput>
    hero_image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageFilterInput>
    hero_image_carousel?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselFilterInput>
    quote_slideshow?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowFilterInput>
    learning_excursion_map?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapFilterInput>
    fellows_grid?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFellows_GridFilterInput>
    image_carousel?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImage_CarouselFilterInput>
    link_collection?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionFilterInput>
    headshot_quote?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteFilterInput>
    calls_to_action?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCalls_To_ActionFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_Quote =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_Repeat>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_Repeat =
  {
    quote?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatQuote>
    credit?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatCredit>
    button_link?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatButton_Link>
    button_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatButton_Text>
    photo?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatPhoto>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatButton_Link =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatButton_LinkConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatButton_LinkConfig =
  {
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatButton_LinkConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatButton_LinkFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatButton_LinkConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatButton_Text =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatButton_TextConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatButton_TextConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatButton_TextConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatButton_TextFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatButton_TextConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatCredit =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatCreditConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatCreditConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatCreditConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatCreditFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatCreditConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatFilterInput =
  {
    quote?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatQuoteFilterInput>
    credit?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatCreditFilterInput>
    button_link?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatButton_LinkFilterInput>
    button_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatButton_TextFilterInput>
    photo?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatPhotoFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatPhoto =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatPhotoConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatPhotoConfig =
  {
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatPhotoConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatPhotoFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatPhotoConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatQuote =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatQuoteConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatQuoteConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatQuoteConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatQuoteFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHeadshot_QuoteNon_RepeatQuoteConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_Repeat>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_Repeat =
  {
    variant?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatVariant>
    text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatText>
    button_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_Text>
    button_link?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_Link>
    background_image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatBackground_Image>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatBackground_Image =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatBackground_ImageConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatBackground_ImageConfig =
  {
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatBackground_ImageConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatBackground_ImageFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatBackground_ImageConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_Link =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_LinkConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_LinkConfig =
  {
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_LinkConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_LinkFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_LinkConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_Text =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_TextConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_TextConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_TextConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_TextFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_TextConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatFilterInput =
  {
    variant?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatVariantFilterInput>
    text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatTextFilterInput>
    button_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_TextFilterInput>
    button_link?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatButton_LinkFilterInput>
    background_image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatBackground_ImageFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatText =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatTextConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatTextConfig =
  {
    multi?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatTextConfigFilterInput =
  {
    multi?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatTextFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatTextConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatVariant =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatVariantConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatVariantConfig =
  {
    options?: Maybe<Array<Maybe<Scalars['String']>>>
    default_value?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatVariantConfigFilterInput =
  {
    options?: Maybe<StringQueryOperatorInput>
    default_value?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatVariantFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_ImageNon_RepeatVariantConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_Carousel =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeat>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeat =
  {
    background_image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatBackground_Image>
    text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatText>
    button_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatButton_Text>
    button_link?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatButton_Link>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatBackground_Image =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatBackground_ImageConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatBackground_ImageConfig =
  {
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatBackground_ImageConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatBackground_ImageFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatBackground_ImageConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatButton_Link =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatButton_LinkConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatButton_LinkConfig =
  {
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatButton_LinkConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatButton_LinkFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatButton_LinkConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatButton_Text =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatButton_TextConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatButton_TextConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatButton_TextConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatButton_TextFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatButton_TextConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatFilterInput =
  {
    background_image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatBackground_ImageFilterInput>
    text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatTextFilterInput>
    button_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatButton_TextFilterInput>
    button_link?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatButton_LinkFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatText =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatTextConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatTextConfig =
  {
    multi?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatTextConfigFilterInput =
  {
    multi?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatTextFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesHero_Image_CarouselRepeatTextConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImage_Carousel =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImage_CarouselRepeat>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImage_CarouselFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImage_CarouselRepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImage_CarouselRepeat =
  {
    image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImage_CarouselRepeatImage>
    caption?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImage_CarouselRepeatCaption>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImage_CarouselRepeatCaption =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImage_CarouselRepeatCaptionConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImage_CarouselRepeatCaptionConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImage_CarouselRepeatCaptionConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImage_CarouselRepeatCaptionFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImage_CarouselRepeatCaptionConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImage_CarouselRepeatFilterInput =
  {
    image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImage_CarouselRepeatImageFilterInput>
    caption?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImage_CarouselRepeatCaptionFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImage_CarouselRepeatImage =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImage_CarouselRepeatImageConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImage_CarouselRepeatImageConfig =
  {
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImage_CarouselRepeatImageConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImage_CarouselRepeatImageFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesImage_CarouselRepeatImageConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_Map =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_Repeat>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_RepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_Repeat =
  {
    map_url?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_RepeatMap_Url>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_RepeatFilterInput =
  {
    map_url?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_RepeatMap_UrlFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_RepeatMap_Url =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_RepeatMap_UrlConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_RepeatMap_UrlConfig =
  {
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_RepeatMap_UrlConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_RepeatMap_UrlFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLearning_Excursion_MapNon_RepeatMap_UrlConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_Collection =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeat>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeat =
  {
    thumbnail?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatThumbnail>
    name?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatName>
    description?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatDescription>
    link?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatLink>
    button_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatButton_Text>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatButton_Text =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatButton_TextConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatButton_TextConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatButton_TextConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatButton_TextFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatButton_TextConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatDescription =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatDescriptionConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatDescriptionConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatDescriptionConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatDescriptionFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatDescriptionConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatFilterInput =
  {
    thumbnail?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatThumbnailFilterInput>
    name?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatNameFilterInput>
    description?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatDescriptionFilterInput>
    link?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatLinkFilterInput>
    button_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatButton_TextFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatLink =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatLinkConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatLinkConfig =
  {
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatLinkConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatLinkFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatLinkConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatName =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatNameConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatNameConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatNameConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatNameFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatNameConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatThumbnail =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatThumbnailConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatThumbnailConfig =
  {
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatThumbnailConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatThumbnailFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesLink_CollectionRepeatThumbnailConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_Slideshow =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeat>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeat =
  {
    photo?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatPhoto>
    quote?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuote>
    quotee_name?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_Name>
    quotee_title?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_Title>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatFilterInput =
  {
    photo?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatPhotoFilterInput>
    quote?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuoteFilterInput>
    quotee_name?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_NameFilterInput>
    quotee_title?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_TitleFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatPhoto =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatPhotoConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatPhotoConfig =
  {
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatPhotoConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatPhotoFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatPhotoConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuote =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuoteConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuoteConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuoteConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuoteFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuoteConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_Name =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_NameConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_NameConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_NameConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_NameFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_NameConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_Title =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_TitleConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_TitleConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_TitleConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_TitleFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesQuote_SlideshowRepeatQuotee_TitleConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText = {
  type?: Maybe<Scalars['String']>
  fieldset?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  icon?: Maybe<Scalars['String']>
  display?: Maybe<Scalars['String']>
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_Repeat>
}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_RepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_Repeat =
  {
    text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_RepeatText>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_RepeatFilterInput =
  {
    text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_RepeatTextFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_RepeatText =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_RepeatTextConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_RepeatTextConfig =
  {
    multi?: Maybe<Scalars['String']>
    allowTargetBlank?: Maybe<Scalars['Boolean']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_RepeatTextConfigFilterInput =
  {
    multi?: Maybe<StringQueryOperatorInput>
    allowTargetBlank?: Maybe<BooleanQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_RepeatTextFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextNon_RepeatTextConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigFilterInput = {
  choices?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterInput>
}

export type SitePluginPluginOptionsSchemasPageBodyBodyFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  fieldset?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasPageBodyFilterInput = {
  body?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyFilterInput>
}

export type SitePluginPluginOptionsSchemasPageFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasPageMainFilterInput>
  Body?: Maybe<SitePluginPluginOptionsSchemasPageBodyFilterInput>
}

export type SitePluginPluginOptionsSchemasPageMain = {
  title?: Maybe<SitePluginPluginOptionsSchemasPageMainTitle>
  uid?: Maybe<SitePluginPluginOptionsSchemasPageMainUid>
  meta_title?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_Title>
  meta_description?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_Description>
  parent?: Maybe<SitePluginPluginOptionsSchemasPageMainParent>
  redirect_to?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_To>
  redirect_is_permanent?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_Is_Permanent>
}

export type SitePluginPluginOptionsSchemasPageMainFilterInput = {
  title?: Maybe<SitePluginPluginOptionsSchemasPageMainTitleFilterInput>
  uid?: Maybe<SitePluginPluginOptionsSchemasPageMainUidFilterInput>
  meta_title?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_TitleFilterInput>
  meta_description?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_DescriptionFilterInput>
  parent?: Maybe<SitePluginPluginOptionsSchemasPageMainParentFilterInput>
  redirect_to?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_ToFilterInput>
  redirect_is_permanent?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentFilterInput>
}

export type SitePluginPluginOptionsSchemasPageMainMeta_Description = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_DescriptionConfig>
}

export type SitePluginPluginOptionsSchemasPageMainMeta_DescriptionConfig = {
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasPageMainMeta_DescriptionConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageMainMeta_DescriptionFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_DescriptionConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageMainMeta_Title = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_TitleConfig>
}

export type SitePluginPluginOptionsSchemasPageMainMeta_TitleConfig = {
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasPageMainMeta_TitleConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageMainMeta_TitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_TitleConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasPageMainParent = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainParentConfig>
}

export type SitePluginPluginOptionsSchemasPageMainParentConfig = {
  select?: Maybe<Scalars['String']>
  customtypes?: Maybe<Array<Maybe<Scalars['String']>>>
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasPageMainParentConfigFilterInput = {
  select?: Maybe<StringQueryOperatorInput>
  customtypes?: Maybe<StringQueryOperatorInput>
  label?: Maybe<StringQueryOperatorInput>
  placeholder?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasPageMainParentFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainParentConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasPageMainRedirect_Is_Permanent = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentConfig>
}

export type SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentConfig =
  {
    placeholder_false?: Maybe<Scalars['String']>
    placeholder_true?: Maybe<Scalars['String']>
    default_value?: Maybe<Scalars['Boolean']>
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentConfigFilterInput =
  {
    placeholder_false?: Maybe<StringQueryOperatorInput>
    placeholder_true?: Maybe<StringQueryOperatorInput>
    default_value?: Maybe<BooleanQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageMainRedirect_To = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_ToConfig>
}

export type SitePluginPluginOptionsSchemasPageMainRedirect_ToConfig = {
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasPageMainRedirect_ToConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageMainRedirect_ToFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_ToConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasPageMainTitle = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainTitleConfig>
}

export type SitePluginPluginOptionsSchemasPageMainTitleConfig = {
  single?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasPageMainTitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>
  label?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasPageMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainTitleConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasPageMainUid = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainUidConfig>
}

export type SitePluginPluginOptionsSchemasPageMainUidConfig = {
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasPageMainUidConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>
  placeholder?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasPageMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainUidConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasProject = {
  Main?: Maybe<SitePluginPluginOptionsSchemasProjectMain>
  Body?: Maybe<SitePluginPluginOptionsSchemasProjectBody>
}

export type SitePluginPluginOptionsSchemasProjectBody = {
  body?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBody>
}

export type SitePluginPluginOptionsSchemasProjectBodyBody = {
  type?: Maybe<Scalars['String']>
  fieldset?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfig>
}

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfig = {
  choices?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoices>
}

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoices = {
  text_intro?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesText_Intro>
  text?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesText>
  images?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesImages>
  video?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesVideo>
  link_card?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesLink_Card>
  divider?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesDivider>
  anchor?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesAnchor>
}

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesAnchor = {
  type?: Maybe<Scalars['String']>
  fieldset?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  icon?: Maybe<Scalars['String']>
  display?: Maybe<Scalars['String']>
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesAnchorNon_Repeat>
}

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesAnchorFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesAnchorNon_RepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesAnchorNon_Repeat =
  {
    id?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesAnchorNon_RepeatId>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesAnchorNon_RepeatFilterInput =
  {
    id?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesAnchorNon_RepeatIdFilterInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesAnchorNon_RepeatId =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesAnchorNon_RepeatIdConfig>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesAnchorNon_RepeatIdConfig =
  {
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesAnchorNon_RepeatIdConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesAnchorNon_RepeatIdFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesAnchorNon_RepeatIdConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesDivider =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesDividerFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesFilterInput =
  {
    text_intro?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesText_IntroFilterInput>
    text?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesTextFilterInput>
    images?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesImagesFilterInput>
    video?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesVideoFilterInput>
    link_card?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesLink_CardFilterInput>
    divider?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesDividerFilterInput>
    anchor?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesAnchorFilterInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesImages = {
  type?: Maybe<Scalars['String']>
  fieldset?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  icon?: Maybe<Scalars['String']>
  display?: Maybe<Scalars['String']>
  repeat?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesImagesRepeat>
}

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesImagesFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    repeat?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesImagesRepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesImagesRepeat =
  {
    image?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesImagesRepeatImage>
    caption?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesImagesRepeatCaption>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesImagesRepeatCaption =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesImagesRepeatCaptionConfig>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesImagesRepeatCaptionConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesImagesRepeatCaptionConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesImagesRepeatCaptionFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesImagesRepeatCaptionConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesImagesRepeatFilterInput =
  {
    image?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesImagesRepeatImageFilterInput>
    caption?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesImagesRepeatCaptionFilterInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesImagesRepeatImage =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesImagesRepeatImageConfig>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesImagesRepeatImageConfig =
  {
    constraint?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesImagesRepeatImageConfigConstraint>
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesImagesRepeatImageConfigConstraint =
  {
    width?: Maybe<Scalars['Int']>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesImagesRepeatImageConfigConstraintFilterInput =
  {
    width?: Maybe<IntQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesImagesRepeatImageConfigFilterInput =
  {
    constraint?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesImagesRepeatImageConfigConstraintFilterInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesImagesRepeatImageFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesImagesRepeatImageConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesLink_Card =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesLink_CardNon_Repeat>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesLink_CardFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesLink_CardNon_RepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesLink_CardNon_Repeat =
  {
    link_title?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesLink_CardNon_RepeatLink_Title>
    link?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesLink_CardNon_RepeatLink>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesLink_CardNon_RepeatFilterInput =
  {
    link_title?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesLink_CardNon_RepeatLink_TitleFilterInput>
    link?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesLink_CardNon_RepeatLinkFilterInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesLink_CardNon_RepeatLink =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesLink_CardNon_RepeatLinkConfig>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesLink_CardNon_RepeatLinkConfig =
  {
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesLink_CardNon_RepeatLinkConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesLink_CardNon_RepeatLinkFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesLink_CardNon_RepeatLinkConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesLink_CardNon_RepeatLink_Title =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesLink_CardNon_RepeatLink_TitleConfig>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesLink_CardNon_RepeatLink_TitleConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesLink_CardNon_RepeatLink_TitleConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesLink_CardNon_RepeatLink_TitleFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesLink_CardNon_RepeatLink_TitleConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesText = {
  type?: Maybe<Scalars['String']>
  fieldset?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  icon?: Maybe<Scalars['String']>
  display?: Maybe<Scalars['String']>
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesTextNon_Repeat>
}

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesTextFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesTextNon_RepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesTextNon_Repeat =
  {
    text?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesTextNon_RepeatText>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesTextNon_RepeatFilterInput =
  {
    text?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesTextNon_RepeatTextFilterInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesTextNon_RepeatText =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesTextNon_RepeatTextConfig>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesTextNon_RepeatTextConfig =
  {
    multi?: Maybe<Scalars['String']>
    allowTargetBlank?: Maybe<Scalars['Boolean']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesTextNon_RepeatTextConfigFilterInput =
  {
    multi?: Maybe<StringQueryOperatorInput>
    allowTargetBlank?: Maybe<BooleanQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesTextNon_RepeatTextFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesTextNon_RepeatTextConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesText_Intro =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesText_IntroNon_Repeat>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesText_IntroFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesText_IntroNon_RepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesText_IntroNon_Repeat =
  {
    introductory_text?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_Text>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesText_IntroNon_RepeatFilterInput =
  {
    introductory_text?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_TextFilterInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_Text =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_TextConfig>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_TextConfig =
  {
    multi?: Maybe<Scalars['String']>
    allowTargetBlank?: Maybe<Scalars['Boolean']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_TextConfigFilterInput =
  {
    multi?: Maybe<StringQueryOperatorInput>
    allowTargetBlank?: Maybe<BooleanQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_TextFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesText_IntroNon_RepeatIntroductory_TextConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesVideo = {
  type?: Maybe<Scalars['String']>
  fieldset?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  icon?: Maybe<Scalars['String']>
  display?: Maybe<Scalars['String']>
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesVideoNon_Repeat>
}

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesVideoFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesVideoNon_RepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesVideoNon_Repeat =
  {
    video?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesVideoNon_RepeatVideo>
    poster?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesVideoNon_RepeatPoster>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesVideoNon_RepeatFilterInput =
  {
    video?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesVideoNon_RepeatVideoFilterInput>
    poster?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesVideoNon_RepeatPosterFilterInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesVideoNon_RepeatPoster =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesVideoNon_RepeatPosterConfig>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesVideoNon_RepeatPosterConfig =
  {
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesVideoNon_RepeatPosterConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesVideoNon_RepeatPosterFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesVideoNon_RepeatPosterConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesVideoNon_RepeatVideo =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesVideoNon_RepeatVideoConfig>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesVideoNon_RepeatVideoConfig =
  {
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesVideoNon_RepeatVideoConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesVideoNon_RepeatVideoFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesVideoNon_RepeatVideoConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasProjectBodyBodyConfigFilterInput = {
  choices?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigChoicesFilterInput>
}

export type SitePluginPluginOptionsSchemasProjectBodyBodyFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  fieldset?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasProjectBodyFilterInput = {
  body?: Maybe<SitePluginPluginOptionsSchemasProjectBodyBodyFilterInput>
}

export type SitePluginPluginOptionsSchemasProjectFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasProjectMainFilterInput>
  Body?: Maybe<SitePluginPluginOptionsSchemasProjectBodyFilterInput>
}

export type SitePluginPluginOptionsSchemasProjectMain = {
  title?: Maybe<SitePluginPluginOptionsSchemasProjectMainTitle>
  uid?: Maybe<SitePluginPluginOptionsSchemasProjectMainUid>
  description?: Maybe<SitePluginPluginOptionsSchemasProjectMainDescription>
  website_url?: Maybe<SitePluginPluginOptionsSchemasProjectMainWebsite_Url>
  project_categories?: Maybe<SitePluginPluginOptionsSchemasProjectMainProject_Categories>
  involved_fellows?: Maybe<SitePluginPluginOptionsSchemasProjectMainInvolved_Fellows>
  featured_image?: Maybe<SitePluginPluginOptionsSchemasProjectMainFeatured_Image>
}

export type SitePluginPluginOptionsSchemasProjectMainDescription = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasProjectMainDescriptionConfig>
}

export type SitePluginPluginOptionsSchemasProjectMainDescriptionConfig = {
  multi?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasProjectMainDescriptionConfigFilterInput =
  {
    multi?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasProjectMainDescriptionFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasProjectMainDescriptionConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasProjectMainFeatured_Image = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasProjectMainFeatured_ImageConfig>
}

export type SitePluginPluginOptionsSchemasProjectMainFeatured_ImageConfig = {
  label?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasProjectMainFeatured_ImageConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasProjectMainFeatured_ImageFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasProjectMainFeatured_ImageConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasProjectMainFilterInput = {
  title?: Maybe<SitePluginPluginOptionsSchemasProjectMainTitleFilterInput>
  uid?: Maybe<SitePluginPluginOptionsSchemasProjectMainUidFilterInput>
  description?: Maybe<SitePluginPluginOptionsSchemasProjectMainDescriptionFilterInput>
  website_url?: Maybe<SitePluginPluginOptionsSchemasProjectMainWebsite_UrlFilterInput>
  project_categories?: Maybe<SitePluginPluginOptionsSchemasProjectMainProject_CategoriesFilterInput>
  involved_fellows?: Maybe<SitePluginPluginOptionsSchemasProjectMainInvolved_FellowsFilterInput>
  featured_image?: Maybe<SitePluginPluginOptionsSchemasProjectMainFeatured_ImageFilterInput>
}

export type SitePluginPluginOptionsSchemasProjectMainInvolved_Fellows = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasProjectMainInvolved_FellowsConfig>
}

export type SitePluginPluginOptionsSchemasProjectMainInvolved_FellowsConfig = {
  fields?: Maybe<SitePluginPluginOptionsSchemasProjectMainInvolved_FellowsConfigFields>
  label?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasProjectMainInvolved_FellowsConfigFields =
  {
    involved_fellow?: Maybe<SitePluginPluginOptionsSchemasProjectMainInvolved_FellowsConfigFieldsInvolved_Fellow>
    label?: Maybe<SitePluginPluginOptionsSchemasProjectMainInvolved_FellowsConfigFieldsLabel>
  }

export type SitePluginPluginOptionsSchemasProjectMainInvolved_FellowsConfigFieldsFilterInput =
  {
    involved_fellow?: Maybe<SitePluginPluginOptionsSchemasProjectMainInvolved_FellowsConfigFieldsInvolved_FellowFilterInput>
    label?: Maybe<SitePluginPluginOptionsSchemasProjectMainInvolved_FellowsConfigFieldsLabelFilterInput>
  }

export type SitePluginPluginOptionsSchemasProjectMainInvolved_FellowsConfigFieldsInvolved_Fellow =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasProjectMainInvolved_FellowsConfigFieldsInvolved_FellowConfig>
  }

export type SitePluginPluginOptionsSchemasProjectMainInvolved_FellowsConfigFieldsInvolved_FellowConfig =
  {
    select?: Maybe<Scalars['String']>
    customtypes?: Maybe<Array<Maybe<Scalars['String']>>>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasProjectMainInvolved_FellowsConfigFieldsInvolved_FellowConfigFilterInput =
  {
    select?: Maybe<StringQueryOperatorInput>
    customtypes?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasProjectMainInvolved_FellowsConfigFieldsInvolved_FellowFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasProjectMainInvolved_FellowsConfigFieldsInvolved_FellowConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasProjectMainInvolved_FellowsConfigFieldsLabel =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasProjectMainInvolved_FellowsConfigFieldsLabelConfig>
  }

export type SitePluginPluginOptionsSchemasProjectMainInvolved_FellowsConfigFieldsLabelConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasProjectMainInvolved_FellowsConfigFieldsLabelConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasProjectMainInvolved_FellowsConfigFieldsLabelFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasProjectMainInvolved_FellowsConfigFieldsLabelConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasProjectMainInvolved_FellowsConfigFilterInput =
  {
    fields?: Maybe<SitePluginPluginOptionsSchemasProjectMainInvolved_FellowsConfigFieldsFilterInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasProjectMainInvolved_FellowsFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasProjectMainInvolved_FellowsConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasProjectMainProject_Categories = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasProjectMainProject_CategoriesConfig>
}

export type SitePluginPluginOptionsSchemasProjectMainProject_CategoriesConfig =
  {
    fields?: Maybe<SitePluginPluginOptionsSchemasProjectMainProject_CategoriesConfigFields>
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasProjectMainProject_CategoriesConfigFields =
  {
    project_category?: Maybe<SitePluginPluginOptionsSchemasProjectMainProject_CategoriesConfigFieldsProject_Category>
  }

export type SitePluginPluginOptionsSchemasProjectMainProject_CategoriesConfigFieldsFilterInput =
  {
    project_category?: Maybe<SitePluginPluginOptionsSchemasProjectMainProject_CategoriesConfigFieldsProject_CategoryFilterInput>
  }

export type SitePluginPluginOptionsSchemasProjectMainProject_CategoriesConfigFieldsProject_Category =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasProjectMainProject_CategoriesConfigFieldsProject_CategoryConfig>
  }

export type SitePluginPluginOptionsSchemasProjectMainProject_CategoriesConfigFieldsProject_CategoryConfig =
  {
    select?: Maybe<Scalars['String']>
    customtypes?: Maybe<Array<Maybe<Scalars['String']>>>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasProjectMainProject_CategoriesConfigFieldsProject_CategoryConfigFilterInput =
  {
    select?: Maybe<StringQueryOperatorInput>
    customtypes?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasProjectMainProject_CategoriesConfigFieldsProject_CategoryFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasProjectMainProject_CategoriesConfigFieldsProject_CategoryConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasProjectMainProject_CategoriesConfigFilterInput =
  {
    fields?: Maybe<SitePluginPluginOptionsSchemasProjectMainProject_CategoriesConfigFieldsFilterInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasProjectMainProject_CategoriesFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasProjectMainProject_CategoriesConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasProjectMainTitle = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasProjectMainTitleConfig>
}

export type SitePluginPluginOptionsSchemasProjectMainTitleConfig = {
  single?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasProjectMainTitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>
  label?: Maybe<StringQueryOperatorInput>
  placeholder?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasProjectMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasProjectMainTitleConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasProjectMainUid = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasProjectMainUidConfig>
}

export type SitePluginPluginOptionsSchemasProjectMainUidConfig = {
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasProjectMainUidConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>
  placeholder?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasProjectMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasProjectMainUidConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasProjectMainWebsite_Url = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasProjectMainWebsite_UrlConfig>
}

export type SitePluginPluginOptionsSchemasProjectMainWebsite_UrlConfig = {
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasProjectMainWebsite_UrlConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasProjectMainWebsite_UrlFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasProjectMainWebsite_UrlConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasProject_Category = {
  Main?: Maybe<SitePluginPluginOptionsSchemasProject_CategoryMain>
}

export type SitePluginPluginOptionsSchemasProject_CategoryFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasProject_CategoryMainFilterInput>
}

export type SitePluginPluginOptionsSchemasProject_CategoryMain = {
  name?: Maybe<SitePluginPluginOptionsSchemasProject_CategoryMainName>
  uid?: Maybe<SitePluginPluginOptionsSchemasProject_CategoryMainUid>
}

export type SitePluginPluginOptionsSchemasProject_CategoryMainFilterInput = {
  name?: Maybe<SitePluginPluginOptionsSchemasProject_CategoryMainNameFilterInput>
  uid?: Maybe<SitePluginPluginOptionsSchemasProject_CategoryMainUidFilterInput>
}

export type SitePluginPluginOptionsSchemasProject_CategoryMainName = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasProject_CategoryMainNameConfig>
}

export type SitePluginPluginOptionsSchemasProject_CategoryMainNameConfig = {
  single?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasProject_CategoryMainNameConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasProject_CategoryMainNameFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasProject_CategoryMainNameConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasProject_CategoryMainUid = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasProject_CategoryMainUidConfig>
}

export type SitePluginPluginOptionsSchemasProject_CategoryMainUidConfig = {
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasProject_CategoryMainUidConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasProject_CategoryMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasProject_CategoryMainUidConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasSettings = {
  Main?: Maybe<SitePluginPluginOptionsSchemasSettingsMain>
  Redirects?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirects>
  Developer_Only?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_Only>
}

export type SitePluginPluginOptionsSchemasSettingsDeveloper_Only = {
  preview_map?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_Map>
}

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyFilterInput = {
  preview_map?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapFilterInput>
}

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_Map = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfig>
}

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfig =
  {
    fields?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFields>
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFields =
  {
    api_id?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_Id>
    page?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPage>
  }

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_Id =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_IdConfig>
  }

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_IdConfig =
  {
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_IdConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_IdFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_IdConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsFilterInput =
  {
    api_id?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_IdFilterInput>
    page?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPageFilterInput>
  }

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPage =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPageConfig>
  }

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPageConfig =
  {
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPageConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPageFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPageConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFilterInput =
  {
    fields?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsFilterInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasSettingsFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasSettingsMainFilterInput>
  Redirects?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsFilterInput>
  Developer_Only?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyFilterInput>
}

export type SitePluginPluginOptionsSchemasSettingsMain = {
  title?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTitle>
  site_name?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_Name>
  site_description?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_Description>
  site_copyright?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_Copyright>
  facebook_handle?: Maybe<SitePluginPluginOptionsSchemasSettingsMainFacebook_Handle>
  linkedin_handle?: Maybe<SitePluginPluginOptionsSchemasSettingsMainLinkedin_Handle>
  newsletter_sign_up_link?: Maybe<SitePluginPluginOptionsSchemasSettingsMainNewsletter_Sign_Up_Link>
}

export type SitePluginPluginOptionsSchemasSettingsMainFacebook_Handle = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainFacebook_HandleConfig>
}

export type SitePluginPluginOptionsSchemasSettingsMainFacebook_HandleConfig = {
  single?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasSettingsMainFacebook_HandleConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasSettingsMainFacebook_HandleFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainFacebook_HandleConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasSettingsMainFilterInput = {
  title?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTitleFilterInput>
  site_name?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_NameFilterInput>
  site_description?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionFilterInput>
  site_copyright?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightFilterInput>
  facebook_handle?: Maybe<SitePluginPluginOptionsSchemasSettingsMainFacebook_HandleFilterInput>
  linkedin_handle?: Maybe<SitePluginPluginOptionsSchemasSettingsMainLinkedin_HandleFilterInput>
  newsletter_sign_up_link?: Maybe<SitePluginPluginOptionsSchemasSettingsMainNewsletter_Sign_Up_LinkFilterInput>
}

export type SitePluginPluginOptionsSchemasSettingsMainLinkedin_Handle = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainLinkedin_HandleConfig>
}

export type SitePluginPluginOptionsSchemasSettingsMainLinkedin_HandleConfig = {
  single?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasSettingsMainLinkedin_HandleConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasSettingsMainLinkedin_HandleFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainLinkedin_HandleConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasSettingsMainNewsletter_Sign_Up_Link =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainNewsletter_Sign_Up_LinkConfig>
  }

export type SitePluginPluginOptionsSchemasSettingsMainNewsletter_Sign_Up_LinkConfig =
  {
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasSettingsMainNewsletter_Sign_Up_LinkConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasSettingsMainNewsletter_Sign_Up_LinkFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainNewsletter_Sign_Up_LinkConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasSettingsMainSite_Copyright = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightConfig>
}

export type SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightConfig = {
  single?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasSettingsMainSite_Description = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionConfig>
}

export type SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionConfig = {
  single?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasSettingsMainSite_Name = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_NameConfig>
}

export type SitePluginPluginOptionsSchemasSettingsMainSite_NameConfig = {
  single?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasSettingsMainSite_NameConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasSettingsMainSite_NameFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_NameConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasSettingsMainTitle = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTitleConfig>
}

export type SitePluginPluginOptionsSchemasSettingsMainTitleConfig = {
  single?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasSettingsMainTitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>
  label?: Maybe<StringQueryOperatorInput>
  placeholder?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasSettingsMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTitleConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasSettingsRedirects = {
  redirects?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirects>
}

export type SitePluginPluginOptionsSchemasSettingsRedirectsFilterInput = {
  redirects?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsFilterInput>
}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirects = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfig>
}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfig = {
  fields?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFields>
  label?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFields =
  {
    from_path?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_Path>
    to_path?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_Path>
    is_permanent?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_Permanent>
  }

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFilterInput =
  {
    from_path?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathFilterInput>
    to_path?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathFilterInput>
    is_permanent?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentFilterInput>
  }

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_Path =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathConfig>
  }

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathConfig =
  {
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_Permanent =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentConfig>
  }

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentConfig =
  {
    placeholder_false?: Maybe<Scalars['String']>
    placeholder_true?: Maybe<Scalars['String']>
    default_value?: Maybe<Scalars['Boolean']>
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentConfigFilterInput =
  {
    placeholder_false?: Maybe<StringQueryOperatorInput>
    placeholder_true?: Maybe<StringQueryOperatorInput>
    default_value?: Maybe<BooleanQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_Path =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathConfig>
  }

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathConfig =
  {
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFilterInput =
  {
    fields?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFilterInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFilterInput>
  }

export type SitePluginPluginOptionsTypekit = {
  id?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsTypekitFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
}

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  titleShort?: Maybe<Scalars['String']>
  siteUrl?: Maybe<Scalars['String']>
}

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  titleShort?: Maybe<StringQueryOperatorInput>
  siteUrl?: Maybe<StringQueryOperatorInput>
}

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>
  ne?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  nin?: Maybe<Array<Maybe<Scalars['String']>>>
  regex?: Maybe<Scalars['String']>
  glob?: Maybe<Scalars['String']>
}

export type GatsbyImgixFluidFragment = {
  aspectRatio: number
  src: string
  srcWebp: string
  srcSet: string
  srcSetWebp: string
  sizes: string
  base64: string
}

export type GatsbyImgixFluid_NoBase64Fragment = {
  aspectRatio: number
  src: string
  srcWebp: string
  srcSet: string
  srcSetWebp: string
  sizes: string
}

export type GatsbyImgixFixedFragment = {
  base64: string
  width: number
  height: number
  src: string
  srcSet: string
  srcWebp: string
  srcSetWebp: string
}

export type GatsbyImgixFixed_NoBase64Fragment = {
  width: number
  height: number
  src: string
  srcSet: string
  srcWebp: string
  srcSetWebp: string
}

export type PrismicPageParentRecursiveFragment = {
  data?: Maybe<{
    parent?: Maybe<{
      document?: Maybe<
        {
          data?: Maybe<{
            parent?: Maybe<{
              document?: Maybe<
                {
                  data?: Maybe<{
                    parent?: Maybe<{
                      document?: Maybe<
                        {
                          data?: Maybe<{
                            parent?: Maybe<{
                              document?: Maybe<PrismicPageParentFieldsFragment>
                            }>
                          }>
                        } & PrismicPageParentFieldsFragment
                      >
                    }>
                  }>
                } & PrismicPageParentFieldsFragment
              >
            }>
          }>
        } & PrismicPageParentFieldsFragment
      >
    }>
  }>
} & PrismicPageParentFieldsFragment

export type PrismicPageParentFieldsFragment = {
  uid: string
  url?: Maybe<string>
  data?: Maybe<{ title?: Maybe<{ text?: Maybe<string> }> }>
}

export type PrismicInteriorPageParentRecursiveFragment = {
  data?: Maybe<{
    parent?: Maybe<{
      document?: Maybe<
        {
          data?: Maybe<{
            parent?: Maybe<{
              document?: Maybe<
                {
                  data?: Maybe<{
                    parent?: Maybe<{
                      document?: Maybe<
                        {
                          data?: Maybe<{
                            parent?: Maybe<{
                              document?: Maybe<PrismicInteriorPageParentFieldsFragment>
                            }>
                          }>
                        } & PrismicInteriorPageParentFieldsFragment
                      >
                    }>
                  }>
                } & PrismicInteriorPageParentFieldsFragment
              >
            }>
          }>
        } & PrismicInteriorPageParentFieldsFragment
      >
    }>
  }>
} & PrismicInteriorPageParentFieldsFragment

export type PrismicInteriorPageParentFieldsFragment = {
  uid: string
  url?: Maybe<string>
  data?: Maybe<{ title?: Maybe<{ text?: Maybe<string> }> }>
}

export type UseCohortsQueryVariables = Exact<{ [key: string]: never }>

export type UseCohortsQuery = {
  allPrismicCohort: {
    nodes: Array<{
      uid: string
      data?: Maybe<{
        cohort_number?: Maybe<number>
        title?: Maybe<{ text?: Maybe<string> }>
      }>
    }>
  }
}

export type UseFellowsQueryVariables = Exact<{ [key: string]: never }>

export type UseFellowsQuery = {
  allPrismicFellow: {
    nodes: Array<{
      uid: string
      url?: Maybe<string>
      data?: Maybe<{
        name?: Maybe<{ text?: Maybe<string> }>
        cohort?: Maybe<{
          document?: Maybe<{
            uid: string
            data?: Maybe<{
              cohort_number?: Maybe<number>
              title?: Maybe<{ text?: Maybe<string> }>
            }>
          }>
        }>
        biography?: Maybe<{ text?: Maybe<string>; html?: Maybe<string> }>
        portrait?: Maybe<{
          alt?: Maybe<string>
          gatsbyImageData?: Maybe<unknown>
        }>
        photo?: Maybe<{ alt?: Maybe<string>; gatsbyImageData?: Maybe<unknown> }>
      }>
    }>
  }
}

export type UseNavigationQueryVariables = Exact<{ [key: string]: never }>

export type UseNavigationQuery = {
  primary?: Maybe<UseNavigationDataFragment>
  secondary?: Maybe<UseNavigationDataFragment>
  footer?: Maybe<UseNavigationDataFragment>
}

export type UseNavigationDataFragment = {
  data?: Maybe<{
    main?: Maybe<
      Array<
        Maybe<{
          id: string
          primary?: Maybe<{
            name?: Maybe<string>
            link?: Maybe<{ uid?: Maybe<string>; url?: Maybe<string> }>
          }>
          items?: Maybe<
            Array<
              Maybe<{
                name?: Maybe<string>
                link?: Maybe<{ uid?: Maybe<string>; url?: Maybe<string> }>
              }>
            >
          >
        }>
      >
    >
  }>
}

export type UseNewsCategoriesQueryVariables = Exact<{ [key: string]: never }>

export type UseNewsCategoriesQuery = {
  allPrismicNewsCategory: {
    nodes: Array<{
      uid: string
      data?: Maybe<{ name?: Maybe<{ text?: Maybe<string> }> }>
    }>
  }
}

export type UseNewsPageQueryVariables = Exact<{ [key: string]: never }>

export type UseNewsPageQuery = {
  prismicPage?: Maybe<{
    _previewable: string
    data?: Maybe<{
      meta_title?: Maybe<string>
      meta_description?: Maybe<string>
      title?: Maybe<{ text?: Maybe<string> }>
      body?: Maybe<
        Array<
          Maybe<
            | ({
                __typename: 'PrismicPageDataBodyAnchor'
                id: string
              } & SlicesPageBody_PrismicPageDataBodyAnchor_Fragment)
            | ({
                __typename: 'PrismicPageDataBodyCallsToAction'
                id: string
              } & SlicesPageBody_PrismicPageDataBodyCallsToAction_Fragment)
            | ({
                __typename: 'PrismicPageDataBodyFellowsGrid'
                id: string
              } & SlicesPageBody_PrismicPageDataBodyFellowsGrid_Fragment)
            | ({
                __typename: 'PrismicPageDataBodyHeadshotQuote'
                id: string
              } & SlicesPageBody_PrismicPageDataBodyHeadshotQuote_Fragment)
            | ({
                __typename: 'PrismicPageDataBodyHeroImage'
                id: string
              } & SlicesPageBody_PrismicPageDataBodyHeroImage_Fragment)
            | ({
                __typename: 'PrismicPageDataBodyHeroImageCarousel'
                id: string
              } & SlicesPageBody_PrismicPageDataBodyHeroImageCarousel_Fragment)
            | ({
                __typename: 'PrismicPageDataBodyImageCarousel'
                id: string
              } & SlicesPageBody_PrismicPageDataBodyImageCarousel_Fragment)
            | ({
                __typename: 'PrismicPageDataBodyLearningExcursionMap'
                id: string
              } & SlicesPageBody_PrismicPageDataBodyLearningExcursionMap_Fragment)
            | ({
                __typename: 'PrismicPageDataBodyLinkCollection'
                id: string
              } & SlicesPageBody_PrismicPageDataBodyLinkCollection_Fragment)
            | ({
                __typename: 'PrismicPageDataBodyQuoteSlideshow'
                id: string
              } & SlicesPageBody_PrismicPageDataBodyQuoteSlideshow_Fragment)
            | ({
                __typename: 'PrismicPageDataBodyText'
                id: string
              } & SlicesPageBody_PrismicPageDataBodyText_Fragment)
          >
        >
      >
    }>
  }>
}

export type UseSiteMetadataQueryVariables = Exact<{ [key: string]: never }>

export type UseSiteMetadataQuery = {
  site?: Maybe<{
    siteMetadata?: Maybe<{
      title?: Maybe<string>
      titleShort?: Maybe<string>
      description?: Maybe<string>
      siteUrl?: Maybe<string>
    }>
  }>
}

export type PrismicSiteSettingsQueryVariables = Exact<{ [key: string]: never }>

export type PrismicSiteSettingsQuery = {
  prismicSettings?: Maybe<{
    data?: Maybe<{
      site_name?: Maybe<{ text?: Maybe<string> }>
      site_description?: Maybe<{ text?: Maybe<string> }>
      site_copyright?: Maybe<{ text?: Maybe<string> }>
      facebook_handle?: Maybe<{ text?: Maybe<string> }>
      linkedin_handle?: Maybe<{ text?: Maybe<string> }>
      newsletter_sign_up_link?: Maybe<{ url?: Maybe<string> }>
    }>
  }>
}

export type NotFoundPageQueryVariables = Exact<{ [key: string]: never }>

export type NotFoundPageQuery = {
  prismicPage?: Maybe<{
    _previewable: string
    data?: Maybe<{
      meta_title?: Maybe<string>
      meta_description?: Maybe<string>
      title?: Maybe<{ text?: Maybe<string> }>
      body?: Maybe<
        Array<
          Maybe<
            | ({
                __typename: 'PrismicPageDataBodyAnchor'
                id: string
              } & SlicesPageBody_PrismicPageDataBodyAnchor_Fragment)
            | ({
                __typename: 'PrismicPageDataBodyCallsToAction'
                id: string
              } & SlicesPageBody_PrismicPageDataBodyCallsToAction_Fragment)
            | ({
                __typename: 'PrismicPageDataBodyFellowsGrid'
                id: string
              } & SlicesPageBody_PrismicPageDataBodyFellowsGrid_Fragment)
            | ({
                __typename: 'PrismicPageDataBodyHeadshotQuote'
                id: string
              } & SlicesPageBody_PrismicPageDataBodyHeadshotQuote_Fragment)
            | ({
                __typename: 'PrismicPageDataBodyHeroImage'
                id: string
              } & SlicesPageBody_PrismicPageDataBodyHeroImage_Fragment)
            | ({
                __typename: 'PrismicPageDataBodyHeroImageCarousel'
                id: string
              } & SlicesPageBody_PrismicPageDataBodyHeroImageCarousel_Fragment)
            | ({
                __typename: 'PrismicPageDataBodyImageCarousel'
                id: string
              } & SlicesPageBody_PrismicPageDataBodyImageCarousel_Fragment)
            | ({
                __typename: 'PrismicPageDataBodyLearningExcursionMap'
                id: string
              } & SlicesPageBody_PrismicPageDataBodyLearningExcursionMap_Fragment)
            | ({
                __typename: 'PrismicPageDataBodyLinkCollection'
                id: string
              } & SlicesPageBody_PrismicPageDataBodyLinkCollection_Fragment)
            | ({
                __typename: 'PrismicPageDataBodyQuoteSlideshow'
                id: string
              } & SlicesPageBody_PrismicPageDataBodyQuoteSlideshow_Fragment)
            | ({
                __typename: 'PrismicPageDataBodyText'
                id: string
              } & SlicesPageBody_PrismicPageDataBodyText_Fragment)
          >
        >
      >
    }>
  }>
}

export type SearchPageQueryVariables = Exact<{ [key: string]: never }>

export type SearchPageQuery = {
  prismicPage?: Maybe<
    {
      _previewable: string
      data?: Maybe<{
        meta_title?: Maybe<string>
        meta_description?: Maybe<string>
        title?: Maybe<{ text?: Maybe<string> }>
        body?: Maybe<
          Array<
            Maybe<
              | ({
                  __typename: 'PrismicPageDataBodyAnchor'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyAnchor_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyCallsToAction'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyCallsToAction_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyFellowsGrid'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyFellowsGrid_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyHeadshotQuote'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyHeadshotQuote_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyHeroImage'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyHeroImage_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyHeroImageCarousel'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyHeroImageCarousel_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyImageCarousel'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyImageCarousel_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyLearningExcursionMap'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyLearningExcursionMap_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyLinkCollection'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyLinkCollection_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyQuoteSlideshow'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyQuoteSlideshow_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyText'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyText_Fragment)
            >
          >
        >
      }>
    } & PrismicPageParentRecursiveFragment
  >
}

type SlicesInteriorPageBody_PrismicInteriorPageDataBodyAnchor_Fragment =
  InteriorPageBodyAnchorFragment

type SlicesInteriorPageBody_PrismicInteriorPageDataBodyCohortSchedule_Fragment =
  InteriorPageBodyCohortScheduleFragment

type SlicesInteriorPageBody_PrismicInteriorPageDataBodyDivider_Fragment = {}

type SlicesInteriorPageBody_PrismicInteriorPageDataBodyImages_Fragment =
  InteriorPageBodyImagesFragment

type SlicesInteriorPageBody_PrismicInteriorPageDataBodyLinkCard_Fragment = {}

type SlicesInteriorPageBody_PrismicInteriorPageDataBodyStaffDirectory_Fragment =
  InteriorPageBodyStaffDirectoryFragment

type SlicesInteriorPageBody_PrismicInteriorPageDataBodyText_Fragment =
  InteriorPageBodyTextFragment

type SlicesInteriorPageBody_PrismicInteriorPageDataBodyTextIntro_Fragment =
  InteriorPageBodyTextIntroFragment

type SlicesInteriorPageBody_PrismicInteriorPageDataBodyVideo_Fragment =
  InteriorPageBodyVideoFragment

export type SlicesInteriorPageBodyFragment =
  | SlicesInteriorPageBody_PrismicInteriorPageDataBodyAnchor_Fragment
  | SlicesInteriorPageBody_PrismicInteriorPageDataBodyCohortSchedule_Fragment
  | SlicesInteriorPageBody_PrismicInteriorPageDataBodyDivider_Fragment
  | SlicesInteriorPageBody_PrismicInteriorPageDataBodyImages_Fragment
  | SlicesInteriorPageBody_PrismicInteriorPageDataBodyLinkCard_Fragment
  | SlicesInteriorPageBody_PrismicInteriorPageDataBodyStaffDirectory_Fragment
  | SlicesInteriorPageBody_PrismicInteriorPageDataBodyText_Fragment
  | SlicesInteriorPageBody_PrismicInteriorPageDataBodyTextIntro_Fragment
  | SlicesInteriorPageBody_PrismicInteriorPageDataBodyVideo_Fragment

export type InteriorPageBodyAnchorFragment = {
  primary?: Maybe<{ id?: Maybe<string> }>
}

export type InteriorPageBodyCohortScheduleFragment = {
  primary?: Maybe<{
    cohort_schedule?: Maybe<{
      document?: Maybe<{
        data?: Maybe<{
          body?: Maybe<
            Array<
              Maybe<{
                primary?: Maybe<{
                  description_heading?: Maybe<{ text?: Maybe<string> }>
                  dates_heading?: Maybe<{ text?: Maybe<string> }>
                }>
                items?: Maybe<
                  Array<
                    Maybe<{
                      event_description?: Maybe<{
                        text?: Maybe<string>
                        html?: Maybe<string>
                      }>
                      event_date?: Maybe<{
                        text?: Maybe<string>
                        html?: Maybe<string>
                      }>
                    }>
                  >
                >
              }>
            >
          >
        }>
      }>
    }>
  }>
}

export type InteriorPageBodyImagesFragment = {
  items?: Maybe<
    Array<
      Maybe<{
        image?: Maybe<{
          alt?: Maybe<string>
          url?: Maybe<string>
          gatsbyImageData?: Maybe<unknown>
        }>
        caption?: Maybe<{ html?: Maybe<string>; text?: Maybe<string> }>
      }>
    >
  >
}

export type InteriorPageBodyLinkCardFragment = {
  primary?: Maybe<{
    link_title?: Maybe<{ text?: Maybe<string> }>
    link?: Maybe<{ url?: Maybe<string> }>
  }>
}

export type InteriorPageBodyStaffDirectoryFragment = {
  items?: Maybe<
    Array<
      Maybe<{
        name?: Maybe<{ text?: Maybe<string> }>
        staff_title?: Maybe<{ text?: Maybe<string> }>
        biography?: Maybe<{ text?: Maybe<string>; html?: Maybe<string> }>
        photo?: Maybe<{ alt?: Maybe<string>; gatsbyImageData?: Maybe<unknown> }>
      }>
    >
  >
}

export type InteriorPageBodyTextFragment = {
  primary?: Maybe<{
    text?: Maybe<{ text?: Maybe<string>; html?: Maybe<string> }>
  }>
}

export type InteriorPageBodyTextIntroFragment = {
  primary?: Maybe<{
    introductory_text?: Maybe<{ text?: Maybe<string>; html?: Maybe<string> }>
  }>
}

export type InteriorPageBodyVideoFragment = {
  primary?: Maybe<{
    video?: Maybe<{
      embed_url?: Maybe<string>
      thumbnail_url?: Maybe<string>
      thumbnail_height?: Maybe<number>
      thumbnail_width?: Maybe<number>
    }>
    poster?: Maybe<{ alt?: Maybe<string>; gatsbyImageData?: Maybe<unknown> }>
  }>
}

export type SlicesInteriorPageHeaderFragment =
  InteriorPageHeaderHeroImageFragment

export type InteriorPageHeaderHeroImageFragment = {
  primary?: Maybe<{
    heading?: Maybe<{ text?: Maybe<string>; html?: Maybe<string> }>
    background_image?: Maybe<{ gatsbyImageData?: Maybe<unknown> }>
  }>
}

type SlicesNewsPostBody_PrismicNewsPostDataBodyAnchor_Fragment =
  NewsPostBodyAnchorFragment

type SlicesNewsPostBody_PrismicNewsPostDataBodyDivider_Fragment = {}

type SlicesNewsPostBody_PrismicNewsPostDataBodyImages_Fragment =
  NewsPostBodyImagesFragment

type SlicesNewsPostBody_PrismicNewsPostDataBodyLinkCard_Fragment =
  NewsPostBodyLinkCardFragment

type SlicesNewsPostBody_PrismicNewsPostDataBodyText_Fragment =
  NewsPostBodyTextFragment

type SlicesNewsPostBody_PrismicNewsPostDataBodyTextIntro_Fragment =
  NewsPostBodyTextIntroFragment

type SlicesNewsPostBody_PrismicNewsPostDataBodyVideo_Fragment =
  NewsPostBodyVideoFragment

export type SlicesNewsPostBodyFragment =
  | SlicesNewsPostBody_PrismicNewsPostDataBodyAnchor_Fragment
  | SlicesNewsPostBody_PrismicNewsPostDataBodyDivider_Fragment
  | SlicesNewsPostBody_PrismicNewsPostDataBodyImages_Fragment
  | SlicesNewsPostBody_PrismicNewsPostDataBodyLinkCard_Fragment
  | SlicesNewsPostBody_PrismicNewsPostDataBodyText_Fragment
  | SlicesNewsPostBody_PrismicNewsPostDataBodyTextIntro_Fragment
  | SlicesNewsPostBody_PrismicNewsPostDataBodyVideo_Fragment

export type NewsPostBodyAnchorFragment = {
  primary?: Maybe<{ id?: Maybe<string> }>
}

export type NewsPostBodyImagesFragment = {
  items?: Maybe<
    Array<
      Maybe<{
        image?: Maybe<{
          alt?: Maybe<string>
          url?: Maybe<string>
          gatsbyImageData?: Maybe<unknown>
        }>
        caption?: Maybe<{ html?: Maybe<string>; text?: Maybe<string> }>
      }>
    >
  >
}

export type NewsPostBodyLinkCardFragment = {
  primary?: Maybe<{
    link_title?: Maybe<{ text?: Maybe<string> }>
    link?: Maybe<{ url?: Maybe<string> }>
  }>
}

export type NewsPostBodyTextFragment = {
  primary?: Maybe<{
    text?: Maybe<{ text?: Maybe<string>; html?: Maybe<string> }>
  }>
}

export type NewsPostBodyTextIntroFragment = {
  primary?: Maybe<{
    introductory_text?: Maybe<{ text?: Maybe<string>; html?: Maybe<string> }>
  }>
}

export type NewsPostBodyVideoFragment = {
  primary?: Maybe<{
    video?: Maybe<{
      embed_url?: Maybe<string>
      thumbnail_url?: Maybe<string>
      thumbnail_height?: Maybe<number>
      thumbnail_width?: Maybe<number>
    }>
    poster?: Maybe<{ alt?: Maybe<string>; gatsbyImageData?: Maybe<unknown> }>
  }>
}

type SlicesPageBody_PrismicPageDataBodyAnchor_Fragment = {}

type SlicesPageBody_PrismicPageDataBodyCallsToAction_Fragment =
  PageBodyCallsToActionFragment

type SlicesPageBody_PrismicPageDataBodyFellowsGrid_Fragment = {}

type SlicesPageBody_PrismicPageDataBodyHeadshotQuote_Fragment =
  PageBodyHeadshotQuoteFragment

type SlicesPageBody_PrismicPageDataBodyHeroImage_Fragment =
  PageBodyHeroImageFragment

type SlicesPageBody_PrismicPageDataBodyHeroImageCarousel_Fragment =
  PageBodyHeroImageCarouselFragment

type SlicesPageBody_PrismicPageDataBodyImageCarousel_Fragment =
  PageBodyImageCarouselFragment

type SlicesPageBody_PrismicPageDataBodyLearningExcursionMap_Fragment =
  PageBodyLearningExcursionMapFragment

type SlicesPageBody_PrismicPageDataBodyLinkCollection_Fragment =
  PageBodyLinkCollectionFragment

type SlicesPageBody_PrismicPageDataBodyQuoteSlideshow_Fragment =
  PageBodyQuoteSlideshowFragment

type SlicesPageBody_PrismicPageDataBodyText_Fragment = PageBodyTextFragment

export type SlicesPageBodyFragment =
  | SlicesPageBody_PrismicPageDataBodyAnchor_Fragment
  | SlicesPageBody_PrismicPageDataBodyCallsToAction_Fragment
  | SlicesPageBody_PrismicPageDataBodyFellowsGrid_Fragment
  | SlicesPageBody_PrismicPageDataBodyHeadshotQuote_Fragment
  | SlicesPageBody_PrismicPageDataBodyHeroImage_Fragment
  | SlicesPageBody_PrismicPageDataBodyHeroImageCarousel_Fragment
  | SlicesPageBody_PrismicPageDataBodyImageCarousel_Fragment
  | SlicesPageBody_PrismicPageDataBodyLearningExcursionMap_Fragment
  | SlicesPageBody_PrismicPageDataBodyLinkCollection_Fragment
  | SlicesPageBody_PrismicPageDataBodyQuoteSlideshow_Fragment
  | SlicesPageBody_PrismicPageDataBodyText_Fragment

export type PageBodyAnchorFragment = { primary?: Maybe<{ id?: Maybe<string> }> }

export type PageBodyCallsToActionFragment = {
  items?: Maybe<
    Array<
      Maybe<{
        label?: Maybe<{ text?: Maybe<string> }>
        text?: Maybe<{ text?: Maybe<string>; html?: Maybe<string> }>
        button_text?: Maybe<{ text?: Maybe<string> }>
        button_link?: Maybe<{ url?: Maybe<string> }>
        background_image?: Maybe<{
          alt?: Maybe<string>
          gatsbyImageData?: Maybe<unknown>
        }>
      }>
    >
  >
}

export type PageBodyHeadshotQuoteFragment = {
  primary?: Maybe<{
    quote?: Maybe<{ text?: Maybe<string> }>
    credit?: Maybe<{ text?: Maybe<string> }>
    button_link?: Maybe<{ url?: Maybe<string> }>
    button_text?: Maybe<{ text?: Maybe<string> }>
    photo?: Maybe<{ alt?: Maybe<string>; gatsbyImageData?: Maybe<unknown> }>
  }>
}

export type PageBodyHeroImageFragment = {
  primary?: Maybe<{
    variant?: Maybe<string>
    text?: Maybe<{ text?: Maybe<string>; html?: Maybe<string> }>
    button_text?: Maybe<{ text?: Maybe<string> }>
    button_link?: Maybe<{ url?: Maybe<string> }>
    background_image?: Maybe<{
      alt?: Maybe<string>
      gatsbyImageData?: Maybe<unknown>
    }>
  }>
}

export type PageBodyHeroImageCarouselFragment = {
  items?: Maybe<
    Array<
      Maybe<{
        text?: Maybe<{ text?: Maybe<string>; html?: Maybe<string> }>
        button_text?: Maybe<{ text?: Maybe<string> }>
        button_link?: Maybe<{ url?: Maybe<string> }>
        background_image?: Maybe<{
          alt?: Maybe<string>
          gatsbyImageData?: Maybe<unknown>
        }>
      }>
    >
  >
}

export type PageBodyImageCarouselFragment = {
  items?: Maybe<
    Array<
      Maybe<{
        image?: Maybe<{
          alt?: Maybe<string>
          url?: Maybe<string>
          gatsbyImageData?: Maybe<unknown>
        }>
        caption?: Maybe<{ html?: Maybe<string>; text?: Maybe<string> }>
      }>
    >
  >
}

export type PageBodyLearningExcursionMapFragment = {
  primary?: Maybe<{ map_url?: Maybe<string> }>
}

export type PageBodyLinkCollectionFragment = {
  items?: Maybe<
    Array<
      Maybe<{
        name?: Maybe<{ text?: Maybe<string> }>
        description?: Maybe<{ text?: Maybe<string> }>
        link?: Maybe<{ url?: Maybe<string> }>
        button_text?: Maybe<{ text?: Maybe<string> }>
        thumbnail?: Maybe<{
          alt?: Maybe<string>
          gatsbyImageData?: Maybe<unknown>
        }>
      }>
    >
  >
}

export type PageBodyQuoteSlideshowFragment = {
  items?: Maybe<
    Array<
      Maybe<{
        quote?: Maybe<{ text?: Maybe<string> }>
        quotee_name?: Maybe<{ text?: Maybe<string> }>
        quotee_title?: Maybe<{ text?: Maybe<string> }>
        photo?: Maybe<{ alt?: Maybe<string>; gatsbyImageData?: Maybe<unknown> }>
      }>
    >
  >
}

export type LocalSearchAllContentQueryVariables = Exact<{
  [key: string]: never
}>

export type LocalSearchAllContentQuery = {
  localSearchAllContent?: Maybe<{
    publicIndexURL: string
    publicStoreURL: string
  }>
}

export type PageBodyTextFragment = {
  primary?: Maybe<{
    text?: Maybe<{ text?: Maybe<string>; html?: Maybe<string> }>
  }>
}

type SlicesProjectBody_PrismicProjectDataBodyAnchor_Fragment =
  ProjectBodyAnchorFragment

type SlicesProjectBody_PrismicProjectDataBodyDivider_Fragment = {}

type SlicesProjectBody_PrismicProjectDataBodyImages_Fragment =
  ProjectBodyImagesFragment

type SlicesProjectBody_PrismicProjectDataBodyLinkCard_Fragment =
  ProjectBodyLinkCardFragment

type SlicesProjectBody_PrismicProjectDataBodyText_Fragment =
  ProjectBodyTextFragment

type SlicesProjectBody_PrismicProjectDataBodyTextIntro_Fragment =
  ProjectBodyTextIntroFragment

type SlicesProjectBody_PrismicProjectDataBodyVideo_Fragment =
  ProjectBodyVideoFragment

export type SlicesProjectBodyFragment =
  | SlicesProjectBody_PrismicProjectDataBodyAnchor_Fragment
  | SlicesProjectBody_PrismicProjectDataBodyDivider_Fragment
  | SlicesProjectBody_PrismicProjectDataBodyImages_Fragment
  | SlicesProjectBody_PrismicProjectDataBodyLinkCard_Fragment
  | SlicesProjectBody_PrismicProjectDataBodyText_Fragment
  | SlicesProjectBody_PrismicProjectDataBodyTextIntro_Fragment
  | SlicesProjectBody_PrismicProjectDataBodyVideo_Fragment

export type ProjectBodyAnchorFragment = {
  primary?: Maybe<{ id?: Maybe<string> }>
}

export type ProjectBodyImagesFragment = {
  items?: Maybe<
    Array<
      Maybe<{
        image?: Maybe<{
          alt?: Maybe<string>
          url?: Maybe<string>
          gatsbyImageData?: Maybe<unknown>
        }>
        caption?: Maybe<{ html?: Maybe<string>; text?: Maybe<string> }>
      }>
    >
  >
}

export type ProjectBodyLinkCardFragment = {
  primary?: Maybe<{
    link_title?: Maybe<{ text?: Maybe<string> }>
    link?: Maybe<{ url?: Maybe<string> }>
  }>
}

export type ProjectBodyTextFragment = {
  primary?: Maybe<{
    text?: Maybe<{ text?: Maybe<string>; html?: Maybe<string> }>
  }>
}

export type ProjectBodyTextIntroFragment = {
  primary?: Maybe<{
    introductory_text?: Maybe<{ text?: Maybe<string>; html?: Maybe<string> }>
  }>
}

export type ProjectBodyVideoFragment = {
  primary?: Maybe<{
    video?: Maybe<{
      embed_url?: Maybe<string>
      thumbnail_url?: Maybe<string>
      thumbnail_height?: Maybe<number>
      thumbnail_width?: Maybe<number>
    }>
    poster?: Maybe<{ alt?: Maybe<string>; gatsbyImageData?: Maybe<unknown> }>
  }>
}

export type InteriorPageTemplateQueryVariables = Exact<{
  uid: Scalars['String']
}>

export type InteriorPageTemplateQuery = {
  prismicInteriorPage?: Maybe<
    {
      _previewable: string
      data?: Maybe<{
        meta_title?: Maybe<string>
        meta_description?: Maybe<string>
        title?: Maybe<{ text?: Maybe<string> }>
        header?: Maybe<
          Array<
            Maybe<
              {
                __typename: 'PrismicInteriorPageDataHeaderHeroImage'
                id: string
              } & SlicesInteriorPageHeaderFragment
            >
          >
        >
        body?: Maybe<
          Array<
            Maybe<
              | ({
                  __typename: 'PrismicInteriorPageDataBodyAnchor'
                  id: string
                } & SlicesInteriorPageBody_PrismicInteriorPageDataBodyAnchor_Fragment)
              | ({
                  __typename: 'PrismicInteriorPageDataBodyCohortSchedule'
                  id: string
                } & SlicesInteriorPageBody_PrismicInteriorPageDataBodyCohortSchedule_Fragment)
              | ({
                  __typename: 'PrismicInteriorPageDataBodyDivider'
                  id: string
                } & SlicesInteriorPageBody_PrismicInteriorPageDataBodyDivider_Fragment)
              | ({
                  __typename: 'PrismicInteriorPageDataBodyImages'
                  id: string
                } & SlicesInteriorPageBody_PrismicInteriorPageDataBodyImages_Fragment)
              | ({
                  __typename: 'PrismicInteriorPageDataBodyLinkCard'
                  id: string
                } & SlicesInteriorPageBody_PrismicInteriorPageDataBodyLinkCard_Fragment)
              | ({
                  __typename: 'PrismicInteriorPageDataBodyStaffDirectory'
                  id: string
                } & SlicesInteriorPageBody_PrismicInteriorPageDataBodyStaffDirectory_Fragment)
              | ({
                  __typename: 'PrismicInteriorPageDataBodyText'
                  id: string
                } & SlicesInteriorPageBody_PrismicInteriorPageDataBodyText_Fragment)
              | ({
                  __typename: 'PrismicInteriorPageDataBodyTextIntro'
                  id: string
                } & SlicesInteriorPageBody_PrismicInteriorPageDataBodyTextIntro_Fragment)
              | ({
                  __typename: 'PrismicInteriorPageDataBodyVideo'
                  id: string
                } & SlicesInteriorPageBody_PrismicInteriorPageDataBodyVideo_Fragment)
            >
          >
        >
      }>
    } & PrismicInteriorPageParentRecursiveFragment
  >
}

export type NewsTemplateQueryVariables = Exact<{
  limit: Scalars['Int']
  skip: Scalars['Int']
}>

export type NewsTemplateQuery = {
  prismicPage?: Maybe<
    {
      _previewable: string
      data?: Maybe<{
        meta_title?: Maybe<string>
        meta_description?: Maybe<string>
        title?: Maybe<{ text?: Maybe<string> }>
        body?: Maybe<
          Array<
            Maybe<
              | ({
                  __typename: 'PrismicPageDataBodyAnchor'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyAnchor_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyCallsToAction'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyCallsToAction_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyFellowsGrid'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyFellowsGrid_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyHeadshotQuote'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyHeadshotQuote_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyHeroImage'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyHeroImage_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyHeroImageCarousel'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyHeroImageCarousel_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyImageCarousel'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyImageCarousel_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyLearningExcursionMap'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyLearningExcursionMap_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyLinkCollection'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyLinkCollection_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyQuoteSlideshow'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyQuoteSlideshow_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyText'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyText_Fragment)
            >
          >
        >
      }>
    } & PrismicPageParentRecursiveFragment
  >
  allPrismicNewsPost: {
    nodes: Array<{
      url?: Maybe<string>
      first_publication_date: unknown
      data?: Maybe<{
        published_at?: Maybe<unknown>
        title?: Maybe<{ text?: Maybe<string> }>
        excerpt?: Maybe<{ text?: Maybe<string> }>
        news_categories?: Maybe<
          Array<
            Maybe<{
              news_category?: Maybe<{
                document?: Maybe<{
                  uid: string
                  url?: Maybe<string>
                  data?: Maybe<{ name?: Maybe<{ text?: Maybe<string> }> }>
                }>
              }>
            }>
          >
        >
        featured_image?: Maybe<{
          alt?: Maybe<string>
          gatsbyImageData?: Maybe<unknown>
        }>
      }>
    }>
  }
}

export type NewsCategoryTemplateQueryVariables = Exact<{
  uid: Scalars['String']
  limit: Scalars['Int']
  skip: Scalars['Int']
}>

export type NewsCategoryTemplateQuery = {
  prismicNewsCategory?: Maybe<{
    _previewable: string
    uid: string
    url?: Maybe<string>
    data?: Maybe<{ name?: Maybe<{ text?: Maybe<string> }> }>
  }>
  allPrismicNewsPost: {
    nodes: Array<{
      url?: Maybe<string>
      first_publication_date: unknown
      data?: Maybe<{
        published_at?: Maybe<unknown>
        title?: Maybe<{ text?: Maybe<string> }>
        excerpt?: Maybe<{ text?: Maybe<string> }>
        news_categories?: Maybe<
          Array<
            Maybe<{
              news_category?: Maybe<{
                document?: Maybe<{
                  uid: string
                  url?: Maybe<string>
                  data?: Maybe<{ name?: Maybe<{ text?: Maybe<string> }> }>
                }>
              }>
            }>
          >
        >
        featured_image?: Maybe<{
          alt?: Maybe<string>
          gatsbyImageData?: Maybe<unknown>
        }>
      }>
    }>
  }
}

export type NewsPostTemplateQueryVariables = Exact<{
  uid: Scalars['String']
  nextUID?: Maybe<Scalars['String']>
  prevUID?: Maybe<Scalars['String']>
}>

export type NewsPostTemplateQuery = {
  prismicNewsPost?: Maybe<{
    _previewable: string
    uid: string
    first_publication_date: unknown
    data?: Maybe<{
      published_at?: Maybe<unknown>
      title?: Maybe<{ text?: Maybe<string> }>
      excerpt?: Maybe<{ text?: Maybe<string> }>
      news_categories?: Maybe<
        Array<
          Maybe<{
            news_category?: Maybe<{
              document?: Maybe<{
                uid: string
                url?: Maybe<string>
                data?: Maybe<{ name?: Maybe<{ text?: Maybe<string> }> }>
              }>
            }>
          }>
        >
      >
      body?: Maybe<
        Array<
          Maybe<
            | ({
                __typename: 'PrismicNewsPostDataBodyAnchor'
                id: string
              } & SlicesNewsPostBody_PrismicNewsPostDataBodyAnchor_Fragment)
            | ({
                __typename: 'PrismicNewsPostDataBodyDivider'
                id: string
              } & SlicesNewsPostBody_PrismicNewsPostDataBodyDivider_Fragment)
            | ({
                __typename: 'PrismicNewsPostDataBodyImages'
                id: string
              } & SlicesNewsPostBody_PrismicNewsPostDataBodyImages_Fragment)
            | ({
                __typename: 'PrismicNewsPostDataBodyLinkCard'
                id: string
              } & SlicesNewsPostBody_PrismicNewsPostDataBodyLinkCard_Fragment)
            | ({
                __typename: 'PrismicNewsPostDataBodyText'
                id: string
              } & SlicesNewsPostBody_PrismicNewsPostDataBodyText_Fragment)
            | ({
                __typename: 'PrismicNewsPostDataBodyTextIntro'
                id: string
              } & SlicesNewsPostBody_PrismicNewsPostDataBodyTextIntro_Fragment)
            | ({
                __typename: 'PrismicNewsPostDataBodyVideo'
                id: string
              } & SlicesNewsPostBody_PrismicNewsPostDataBodyVideo_Fragment)
          >
        >
      >
    }>
  }>
  nextPrismicNewsPost?: Maybe<NewsPostTemplatePaginatedNewsPostFragment>
  prevPrismicNewsPost?: Maybe<NewsPostTemplatePaginatedNewsPostFragment>
}

export type NewsPostTemplatePaginatedNewsPostFragment = {
  url?: Maybe<string>
  first_publication_date: unknown
  data?: Maybe<{
    published_at?: Maybe<unknown>
    title?: Maybe<{ text?: Maybe<string> }>
    excerpt?: Maybe<{ text?: Maybe<string> }>
    featured_image?: Maybe<{
      alt?: Maybe<string>
      gatsbyImageData?: Maybe<unknown>
    }>
  }>
}

export type PageTemplateQueryVariables = Exact<{
  uid: Scalars['String']
}>

export type PageTemplateQuery = {
  prismicPage?: Maybe<
    {
      _previewable: string
      data?: Maybe<{
        meta_title?: Maybe<string>
        meta_description?: Maybe<string>
        title?: Maybe<{ text?: Maybe<string> }>
        body?: Maybe<
          Array<
            Maybe<
              | ({
                  __typename: 'PrismicPageDataBodyAnchor'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyAnchor_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyCallsToAction'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyCallsToAction_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyFellowsGrid'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyFellowsGrid_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyHeadshotQuote'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyHeadshotQuote_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyHeroImage'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyHeroImage_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyHeroImageCarousel'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyHeroImageCarousel_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyImageCarousel'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyImageCarousel_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyLearningExcursionMap'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyLearningExcursionMap_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyLinkCollection'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyLinkCollection_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyQuoteSlideshow'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyQuoteSlideshow_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyText'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyText_Fragment)
            >
          >
        >
      }>
    } & PrismicPageParentRecursiveFragment
  >
}

export type ProjectTemplateQueryVariables = Exact<{
  uid: Scalars['String']
  nextUID?: Maybe<Scalars['String']>
  prevUID?: Maybe<Scalars['String']>
}>

export type ProjectTemplateQuery = {
  prismicProject?: Maybe<{
    _previewable: string
    uid: string
    data?: Maybe<{
      title?: Maybe<{ text?: Maybe<string> }>
      description?: Maybe<{ text?: Maybe<string>; html?: Maybe<string> }>
      website_url?: Maybe<{ url?: Maybe<string> }>
      involved_fellows?: Maybe<
        Array<
          Maybe<{
            label?: Maybe<{ text?: Maybe<string> }>
            involved_fellow?: Maybe<{
              document?: Maybe<{
                uid: string
                url?: Maybe<string>
                data?: Maybe<{
                  name?: Maybe<{ text?: Maybe<string> }>
                  cohort?: Maybe<{
                    document?: Maybe<{
                      data?: Maybe<{ title?: Maybe<{ text?: Maybe<string> }> }>
                    }>
                  }>
                  portrait?: Maybe<{
                    alt?: Maybe<string>
                    gatsbyImageData?: Maybe<unknown>
                  }>
                }>
              }>
            }>
          }>
        >
      >
      project_categories?: Maybe<
        Array<
          Maybe<{
            project_category?: Maybe<{
              document?: Maybe<{
                uid: string
                url?: Maybe<string>
                data?: Maybe<{ name?: Maybe<{ text?: Maybe<string> }> }>
              }>
            }>
          }>
        >
      >
      body?: Maybe<
        Array<
          Maybe<
            | ({
                __typename: 'PrismicProjectDataBodyAnchor'
                id: string
              } & SlicesProjectBody_PrismicProjectDataBodyAnchor_Fragment)
            | ({
                __typename: 'PrismicProjectDataBodyDivider'
                id: string
              } & SlicesProjectBody_PrismicProjectDataBodyDivider_Fragment)
            | ({
                __typename: 'PrismicProjectDataBodyImages'
                id: string
              } & SlicesProjectBody_PrismicProjectDataBodyImages_Fragment)
            | ({
                __typename: 'PrismicProjectDataBodyLinkCard'
                id: string
              } & SlicesProjectBody_PrismicProjectDataBodyLinkCard_Fragment)
            | ({
                __typename: 'PrismicProjectDataBodyText'
                id: string
              } & SlicesProjectBody_PrismicProjectDataBodyText_Fragment)
            | ({
                __typename: 'PrismicProjectDataBodyTextIntro'
                id: string
              } & SlicesProjectBody_PrismicProjectDataBodyTextIntro_Fragment)
            | ({
                __typename: 'PrismicProjectDataBodyVideo'
                id: string
              } & SlicesProjectBody_PrismicProjectDataBodyVideo_Fragment)
          >
        >
      >
    }>
  }>
  nextPrismicProject?: Maybe<ProjectTemplatePaginatedProjectFragment>
  prevPrismicProject?: Maybe<ProjectTemplatePaginatedProjectFragment>
  prismicPage?: Maybe<
    {
      _previewable: string
      data?: Maybe<{
        meta_title?: Maybe<string>
        meta_description?: Maybe<string>
        title?: Maybe<{ text?: Maybe<string> }>
        body?: Maybe<
          Array<
            Maybe<
              | ({
                  __typename: 'PrismicPageDataBodyAnchor'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyAnchor_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyCallsToAction'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyCallsToAction_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyFellowsGrid'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyFellowsGrid_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyHeadshotQuote'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyHeadshotQuote_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyHeroImage'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyHeroImage_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyHeroImageCarousel'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyHeroImageCarousel_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyImageCarousel'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyImageCarousel_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyLearningExcursionMap'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyLearningExcursionMap_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyLinkCollection'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyLinkCollection_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyQuoteSlideshow'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyQuoteSlideshow_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyText'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyText_Fragment)
            >
          >
        >
      }>
    } & PrismicPageParentRecursiveFragment
  >
}

export type ProjectTemplatePaginatedProjectFragment = {
  url?: Maybe<string>
  first_publication_date: unknown
  data?: Maybe<{
    title?: Maybe<{ text?: Maybe<string> }>
    description?: Maybe<{ text?: Maybe<string>; html?: Maybe<string> }>
    website_url?: Maybe<{ url?: Maybe<string> }>
    featured_image?: Maybe<{
      alt?: Maybe<string>
      gatsbyImageData?: Maybe<unknown>
    }>
  }>
}

export type ProjectCategoryTemplateQueryVariables = Exact<{
  uid: Scalars['String']
  limit: Scalars['Int']
  skip: Scalars['Int']
}>

export type ProjectCategoryTemplateQuery = {
  prismicPage?: Maybe<
    {
      _previewable: string
      data?: Maybe<{
        meta_title?: Maybe<string>
        meta_description?: Maybe<string>
        title?: Maybe<{ text?: Maybe<string> }>
        body?: Maybe<
          Array<
            Maybe<
              | ({
                  __typename: 'PrismicPageDataBodyAnchor'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyAnchor_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyCallsToAction'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyCallsToAction_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyFellowsGrid'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyFellowsGrid_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyHeadshotQuote'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyHeadshotQuote_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyHeroImage'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyHeroImage_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyHeroImageCarousel'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyHeroImageCarousel_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyImageCarousel'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyImageCarousel_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyLearningExcursionMap'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyLearningExcursionMap_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyLinkCollection'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyLinkCollection_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyQuoteSlideshow'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyQuoteSlideshow_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyText'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyText_Fragment)
            >
          >
        >
      }>
    } & PrismicPageParentRecursiveFragment
  >
  prismicProjectCategory?: Maybe<{
    _previewable: string
    uid: string
    url?: Maybe<string>
    data?: Maybe<{ name?: Maybe<{ text?: Maybe<string> }> }>
  }>
  allPrismicProject: {
    nodes: Array<{
      url?: Maybe<string>
      data?: Maybe<{
        title?: Maybe<{ text?: Maybe<string> }>
        description?: Maybe<{ text?: Maybe<string>; html?: Maybe<string> }>
        website_url?: Maybe<{ url?: Maybe<string> }>
        project_categories?: Maybe<
          Array<
            Maybe<{
              project_category?: Maybe<{
                document?: Maybe<{
                  uid: string
                  url?: Maybe<string>
                  data?: Maybe<{ name?: Maybe<{ text?: Maybe<string> }> }>
                }>
              }>
            }>
          >
        >
        featured_image?: Maybe<{
          alt?: Maybe<string>
          gatsbyImageData?: Maybe<unknown>
        }>
      }>
    }>
  }
}

export type ProjectsTemplateQueryVariables = Exact<{
  limit: Scalars['Int']
  skip: Scalars['Int']
}>

export type ProjectsTemplateQuery = {
  prismicPage?: Maybe<
    {
      _previewable: string
      data?: Maybe<{
        meta_title?: Maybe<string>
        meta_description?: Maybe<string>
        title?: Maybe<{ text?: Maybe<string> }>
        body?: Maybe<
          Array<
            Maybe<
              | ({
                  __typename: 'PrismicPageDataBodyAnchor'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyAnchor_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyCallsToAction'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyCallsToAction_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyFellowsGrid'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyFellowsGrid_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyHeadshotQuote'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyHeadshotQuote_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyHeroImage'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyHeroImage_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyHeroImageCarousel'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyHeroImageCarousel_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyImageCarousel'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyImageCarousel_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyLearningExcursionMap'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyLearningExcursionMap_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyLinkCollection'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyLinkCollection_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyQuoteSlideshow'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyQuoteSlideshow_Fragment)
              | ({
                  __typename: 'PrismicPageDataBodyText'
                  id: string
                } & SlicesPageBody_PrismicPageDataBodyText_Fragment)
            >
          >
        >
      }>
    } & PrismicPageParentRecursiveFragment
  >
  allPrismicProject: {
    nodes: Array<{
      url?: Maybe<string>
      data?: Maybe<{
        title?: Maybe<{ text?: Maybe<string> }>
        description?: Maybe<{ text?: Maybe<string>; html?: Maybe<string> }>
        website_url?: Maybe<{ url?: Maybe<string> }>
        project_categories?: Maybe<
          Array<
            Maybe<{
              project_category?: Maybe<{
                document?: Maybe<{
                  uid: string
                  url?: Maybe<string>
                  data?: Maybe<{ name?: Maybe<{ text?: Maybe<string> }> }>
                }>
              }>
            }>
          >
        >
        featured_image?: Maybe<{
          alt?: Maybe<string>
          gatsbyImageData?: Maybe<unknown>
        }>
      }>
    }>
  }
}
