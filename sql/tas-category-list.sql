-- TAS Category List: https://api.usaspending.gov/api/v1/tas/categories/
-- https://github.com/fedspendingtransparency/usaspending-api/blob/dev/usaspending_api/accounts/views/tas.py#L77
SELECT * FROM financial_accounts_by_program_activity_object_class fab
JOIN treasury_appropriation_account ta ON fab.treasury_account_id = ta.treasury_account_identifier
JOIN ref_program_activity pa ON pa.id = fab.program_activity_id
JOIN object_class oc ON oc.id = fab.object_class_id;
