// Form field definitions in ngx-formly format

import { FormlyFieldConfig } from '@ngx-formly/core';

export let customerFormFieldConfig: FormlyFieldConfig[] = [
  {
    key: 'name',
    type: 'input',
    focus: true,
    templateOptions: {
      label: 'Full name',
      required: true,
    },
  },
  {
    key: 'email',
    type: 'input',
    templateOptions: {
      label: 'Email address',
    },
  },
  {
    fieldGroupClassName: 'form-row',
    fieldGroup: [
      {
        className: 'col',
        type: 'input',
        key: 'city',
        templateOptions: {
          label: 'City',
        },
      },
      {
        className: 'col',
        type: 'input',
        key: 'street',
        templateOptions: {
          label: 'Street',
        },
      },
    ],
  },
  {
    fieldGroupClassName: 'form-row',
    fieldGroup: [
      {
        className: 'col',
        type: 'input',
        key: 'house',
        templateOptions: {
          label: 'House number',
        },
      },
      {
        className: 'col',
        type: 'input',
        key: 'zip',
        templateOptions: {
          label: 'Zip code',
        },
      },
    ],
  },
  {
    key: 'friendlyCoordinates',
    type: 'input',
    templateOptions: {
      label: 'Predicted coordinates',
      disabled: true,
    },
  },
];
