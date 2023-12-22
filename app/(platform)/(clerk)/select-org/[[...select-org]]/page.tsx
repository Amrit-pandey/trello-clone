import { OrganizationList } from "@clerk/nextjs";

export default function CreareOrganization() {
    return(
        <OrganizationList 
        hidePersonal
        afterSelectOrganizationUrl='/organization/:id'
        afterCreateOrganizationUrl='/organization/:id'
        />
    )
}